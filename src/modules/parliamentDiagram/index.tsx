import { FC, ReactElement, useState } from "react";
import Text from "src/common/Text";
import styled, { css } from "styled-components";
import Select from "react-select";
import { Group, GroupParties, Seats } from "src/data/models/Parliament";
import { allParties, getParty, getPartyIndex } from "src/data/member-states/parties";
import Semicircle, { Data } from "./semicircle";
import { getEuropeanParty, getEuropeanPartyIndex } from "src/data/union/parties";
import { EPGroup, epGroups, getEPGroup, getEPGroupIndex } from "src/data/union/legislative";
import { group, path } from "d3";
import Party from "src/data/models/Party";
import EuropeanParty from "src/data/models/EuropeanParty";
import { sendStatusCode } from "next/dist/next-server/server/api-utils";
import Nameable from "src/data/models/util/Nameable";
import { valueContainerCSS } from "react-select/src/components/containers";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Container = styled.div``;
const Top = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Selects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
`;
const StyledSelect = styled(Select)<{
  margin: string,
}>`
  width: 125px;
  ${props => props.margin && css`margin: ${props.margin};`}
`;


const ParliamentDiagram: FC<{
  title: string,
  seats: Seats,
  groups: Group[],
}> = ({ title, seats, groups }): ReactElement => {
  const [type, setType] = useState<"semicircle" | "sunburst">("semicircle");
  const [methodSemi, setMethodSemi] = useState<"parties" | "groups" | "epgroups" | "euparties">("parties");
  const [methodSun, setMethodSun] = useState<"p-eg-ep" | "p-ep-eg">("p-eg-ep");

  const convertSeats = (seats: Seats, groups: Group[]) => {
    const modifiedSeats: Data[] = [];
    interface Colorable {
      color?: string,
    }
    if (type === "semicircle") {
      type SortedSeatsFunction = <T extends Nameable & Colorable>(
        getParticipating: (partyId: string, index: number) => {[x: string]: number},
        getT: (input: string) => T,
        seatAccessor: {[k: string]: number}
      ) => Data[];
      const getSortedSeats: SortedSeatsFunction = <T extends Nameable & Colorable>(
        getParticipating: (partyId: string, index: number) => {[x: string]: number},
        getT: (input: string) => T,
        seatAccessor: {[k: string]: number}
      ) => {
        console.log(          Object.entries(
          Object.keys(seats)
            .map(getParticipating)
            .reduce((a, b) => ({...a, ...b}))
        )
          .sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB))
        const getObj = (input: T, seats: number): Data => ({
          id: input?.abbr ?? input.name ?? 'Unknown',
          color: input?.color ?? '#c5c5c5',
          seats: seats,
        });
        return Object.values(
          Object.fromEntries(
            Object.entries(
              Object.keys(seats)
                .map(getParticipating)
                .reduce((a, b) => ({...a, ...b}))
            )
              .sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB)
              .map(([key, value]) => {console.log(key);return ([
                key,
                getObj(
                  getT(key),
                  seatAccessor[key]
                ),
              ])})
          )
        );
      }
      const removeDuplicates = (array: (string|number)[][]) => {
        const withoutDuplicates: {[k: string]: number} = {};
        array.forEach(([key, value]) => key in withoutDuplicates ? withoutDuplicates[key] += value as number : withoutDuplicates[key] = value as number);
        return withoutDuplicates;
      }
      if (methodSemi === "parties") {
        modifiedSeats.push(...getSortedSeats<Party>(
          partyId => ({[partyId]: getPartyIndex(partyId)}),
          getParty,
          removeDuplicates(Object.entries(seats)),
        ));
      }
      if (methodSemi === "groups") {
        const findGroup = (partyId: string) => {
          return groups.find(group => group.parties.includes(partyId))!
        }
        const findGroupIndex = (partyId: string) => {
          return groups.findIndex(group => group.parties.includes(partyId))!
        }
        const getGroupSeats = () => {
          const sDParty: {[k:string]:{[k:string]:number}} = {};
          const sDTParty: {[k:string]:number} = {};
          const sTSParty: {[k: string]:number} = {};
          const sDCParty: {[k:string]:{[k:string]:number}} = {};
        
          const groupsFiltered = groups
            .map(g => ([g?.abbr ?? g.name, g.parties.filter(p => typeof p !== 'string')]));
          groupsFiltered
            .forEach(([clubName, array]) => Object.entries(array as GroupParties[]).
              forEach(([key, value]) => Object.entries(value)
                .forEach(([key, value]) => {
                  if (!(key in sDParty)) sDParty[key] = {};
                  sDParty[key][clubName as string] = value;
                }))
            );
          Object.entries(sDParty).forEach(([key, value]) =>
            sDTParty[key] = Object.values(value).reduce((a, b) => a + b)
          )
          Object.entries(sDTParty).forEach(([key, value]) => {
            sTSParty[key] = seats[key] - value; 
          });
        
          groups
            .map(g => ([g?.abbr ?? g.name, g.parties.filter(p => typeof p === 'string')]))
            .forEach(([key, values]) =>
              (values as string[]).forEach(value => {
                if (!(value in sDCParty)) sDCParty[value] = {};
                sDCParty[value][key as string] = sTSParty[value] ?? seats[value];
              })
            );
          const sClubs = [
            ...Object.values(sDCParty),
            ...Object.values(sDParty)
            ]
              .flatMap(Object.entries);
          
          return sClubs;
        }
        modifiedSeats.push(...getSortedSeats<Group>(
          partyId => ({[findGroup(partyId)?.abbr ?? findGroup(partyId).name ?? 'Unknown']: findGroupIndex(partyId)}),
          (groupId) => {console.log(groupId);return groups.find(group => (group?.abbr ?? group.name) === groupId || group.name === groupId)!},
          removeDuplicates(
            getGroupSeats(),
          )
        ));
      }
      if (methodSemi === "epgroups") {
        modifiedSeats.push(...getSortedSeats<EPGroup>(
            partyId => ({[getEPGroup(getParty(partyId)?.europeanGroup ?? 'NI')?.abbr ?? getEPGroup(getParty(partyId)?.europeanGroup ?? 'NI').name]: getEPGroupIndex(getEPGroup(getParty(partyId)?.europeanGroup ?? 'NI')?.abbr ?? getEPGroup(getParty(partyId)?.europeanGroup ?? 'NI').name)}),
            getEPGroup,
            removeDuplicates(
              Object.entries(seats)
                .map(([key, value]) => ([
                  getEPGroup(getParty(key)?.europeanGroup ?? 'NI')?.abbr ?? 'NI',
                  value
                ]))
            )
        ),);
      }
      if (methodSemi === "euparties") {
        modifiedSeats.push(...getSortedSeats<EuropeanParty>(
          partyId => ({[getParty(partyId)?.europeanParty ?? 'NA']: getEuropeanPartyIndex(getParty(partyId)?.europeanParty ?? 'NA')}),
          getEuropeanParty,
          removeDuplicates(
            Object.entries(seats)
              .map(([key, value]) => ([
                getEuropeanParty(getParty(key)?.europeanParty ?? 'NA')?.abbr ?? 'NA',
                value
              ]))
          )
        ));
      }
    }
    if (type === "sunburst") {

    }
    return modifiedSeats;
  }

  return (
    <Container>
      <Top>
        <Text margin="0 0 0 auto" type="h3">
          {title}
        </Text>
        <Selects>
          <StyledSelect
            margin="0 10px 0 0"
            isDisabled={true}
            defaultValue={{value: "semicircle", label: "Semicircle"}}
            options={[
              {value: "semicircle", label: "Semicircle"},
              {value: "sunburst", label: "Sunburst"},
            ]}
            onChange={({ value }: {value: "semicircle" | "sunburst"}) => setType(value)}
          />
          {type === "semicircle" && <StyledSelect
            defaultValue={{value: "parties", label: "Parties"}}
            options={[
              {value: "parties", label: "Parties"},
              {value: "groups", label: "Groups"},
              {value: "epgroups", label: "EP-Groups"},
              {value: "euparties", label: "Europarties"},
            ]}
            onChange={({ value }: {value: "parties" | "groups" | "epgroups" | "euparties"}) => setMethodSemi(value)}
          />}
          {type === "sunburst" && <StyledSelect
            defaultValue={{value: "p-eg-ep", label: "P -> EG -> EP"}}
            options={[
              {value: "p-eg-ep", label: "P -> EG -> EP"},
              {value: "p-ep-eg", label: "P -> EP -> EG"},
            ]}
            onChange={({ value }: {value: "p-eg-ep" | "p-ep-eg"}) => setMethodSun(value)}
          />}
        </Selects>
      </Top>
      <Semicircle data={convertSeats(seats, groups)} />
    </Container>
  )
}

export default ParliamentDiagram;
