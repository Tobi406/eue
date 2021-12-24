import { FC, ReactElement, useState } from "react";
import Text from "src/common/Text";
import styled, { css } from "styled-components";
import Select from "react-select";
import { Group, GroupParties, Seats } from "src/data/models/Parliament";
import { getParty, getPartyIndex } from "src/data/member-states/parties";
import Semicircle, { DataSemicircle } from "./semicircle";
import { getEuropeanParty, getEuropeanPartyIndex } from "src/data/union/parties";
import { EPGroup, getEPGroup, getEPGroupIndex } from "src/data/union/legislative";
import Party from "src/data/models/Party";
import EuropeanParty from "src/data/models/EuropeanParty";
import Nameable from "src/data/models/util/Nameable";
import Sunburst, { DataChildren, DataSunburst } from "./sunburst";

const Container = styled.div`
  max-width: 500px;
`;
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
  groups?: Group[],
}> = ({ title, seats, groups = [] }): ReactElement => {
  const [type, setType] = useState<"semicircle" | "sunburst">("semicircle");
  const [methodSemi, setMethodSemi] = useState<"parties" | "groups" | "epgroups" | "euparties">("parties");
  const [methodSun, setMethodSun] = useState< "eg-ep-p" | "ep-eg-p">("eg-ep-p");

  const convertSeats = (seats: Seats, groups: Group[]): unknown => {
    interface Colorable {
      color?: string,
    }
    if (type === "semicircle") {
      const modifiedSeats: DataSemicircle[] = [];
      type SortedSeatsFunction = <T extends Nameable & Colorable>(
        getParticipating: (partyId: string, index: number) => {[x: string]: number},
        getT: (input: string) => T,
        seatAccessor: {[k: string]: number},
        customIndexObject?: {[k: string]: number},
      ) => DataSemicircle[];
      const getSortedSeats: SortedSeatsFunction = <T extends Nameable & Colorable>(
        getParticipating: (partyId: string, index: number) => {[x: string]: number},
        getT: (input: string) => T,
        seatAccessor: {[k: string]: number},
        customIndexObject?: {[k: string]: number},
      ) => {
        const getObj = (input: T, seats: number): DataSemicircle => ({
          id: input?.abbr ?? input.name ?? 'Unknown',
          color: input?.color ?? '#c5c5c5',
          seats: seats,
        });
        let indexObject;
        if (customIndexObject !== undefined) {
          indexObject = customIndexObject;
        } else {
          indexObject = Object.keys(seats)
            .map(getParticipating)
            .reduce((a, b) => ({...a, ...b}));
        }
        return Object.values(
          Object.fromEntries(
            Object.entries(indexObject)
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
        const groupIndexArray = groups.map((g, index) => ({[g?.abbr ?? g.name ?? 'Unknown']: index})).reduce((a, b) => ({...a, ...b}));
        modifiedSeats.push(...getSortedSeats<Group>(
          /* without real purpose: */ partyId => ({[findGroup(partyId)?.abbr ?? findGroup(partyId).name ?? 'Unknown']: findGroupIndex(partyId)}),
          (groupId) => {console.log(groupId);return groups.find(group => (group?.abbr ?? group.name) === groupId || group.name === groupId)!},
          removeDuplicates(
            getGroupSeats(),
          ),
          groupIndexArray,
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
      return modifiedSeats;
    }
    if (type === "sunburst") {
      const modifiedSeats: DataSunburst = {
        name: "All",
        color: "#c5c5c5",
        children: [],
      };
      const hasName = (name: string, obj: {name: string}[]) => !obj.every(obj => obj.name !== name);
      const findName = (name: string, obj: {name: string}[]) => obj.find(obj => obj.name === name)!;
      Object.entries(seats).forEach(([partyId, seatsCount]) => {
        const party = getParty(partyId);
        const europeanParty = getEuropeanParty(party?.europeanParty ?? 'NA');
        const europeanGroup = getEPGroup(party?.europeanGroup ?? 'NI');

        const partyState = party?.state ?? 'EU';

        const partyName = party?.abbr ?? party.name;
        const europeanPartyName = europeanParty?.abbr ?? europeanParty.name;
        const europeanGroupName = europeanGroup?.abbr ?? europeanGroup.name;

        const partyColor = party?.color ?? '#c5c5c5';
        const europeanPartyColor = europeanParty?.color ?? '#c5c5c5';
        const europeanGroupColor = europeanGroup?.color ?? '#c5c5c5';

        const sortChildren = (children: DataSunburst[], getIndex: (name: string) => number) => {
          return children
            .map<DataSunburst & {
              index: number,
            }>(child => ({
              ...child,
              index: getIndex(child.name),
            }))
            .sort((a, b) => a.index - b.index)
            .map<DataSunburst>(({index, ...child}) => child);
        }

        if (methodSun === "eg-ep-p") {
          if (!hasName(europeanGroupName, modifiedSeats.children)) {
            modifiedSeats.children.push({
              name: europeanGroupName,
              color: europeanGroupColor,
              children: [],
            });
          }
          const europeanGroupChild = findName(europeanGroupName, modifiedSeats.children) as DataChildren;

          if (!hasName(europeanPartyName, europeanGroupChild.children)) {
            europeanGroupChild.children.push({
              name: europeanPartyName,
              color: europeanPartyColor,
              children: [],
            });
          }
          const europeanPartyChild = findName(europeanPartyName, europeanGroupChild.children) as DataChildren;

          europeanPartyChild.children.push({
            name: partyName,
            value: seatsCount,
            color: partyColor,
            state: partyState,
          });
        }
        if (methodSun === "ep-eg-p") {
          if (!hasName(europeanPartyName, modifiedSeats.children)) {
            modifiedSeats.children.push({
              name: europeanPartyName,
              color: europeanPartyColor,
              children: [],
            });
          }
          const europeanPartyChild = findName(europeanPartyName, modifiedSeats.children) as DataChildren;

          if (!hasName(europeanGroupName, europeanPartyChild.children)) {
             europeanPartyChild.children.push({
              name: europeanGroupName,
              color: europeanGroupColor,
              children: [],
            });
          }
          const europeanGroupChild = findName(europeanGroupName, europeanPartyChild.children) as DataChildren;

          europeanGroupChild.children.push({
            name: partyName,
            value: seatsCount,
            color: partyColor,
            state: partyState,
          });
        }
      
        // Sort seats
        if (methodSun === "eg-ep-p") {
          modifiedSeats.children = sortChildren(modifiedSeats.children, getEPGroupIndex)
           .map(child => ({
             ...child,
             children: sortChildren((child as DataChildren).children, getEuropeanPartyIndex)
               .map(child => ({
                 ...child,
                 children: sortChildren((child as DataChildren).children, getPartyIndex),
               })),
            }));
        }
        if (methodSun === "eg-ep-p") {
          modifiedSeats.children = sortChildren(modifiedSeats.children, getEuropeanPartyIndex)
           .map(child => ({
             ...child,
             children: sortChildren((child as DataChildren).children, getEPGroupIndex)
               .map(child => ({
                 ...child,
                 children: sortChildren((child as DataChildren).children, getPartyIndex),
               })),
            }));
        }
      });
      return modifiedSeats;
    }
  }


  return (
    <Container>
      <Top>
        <Text margin="0 0 0 auto" type="h3">
          {title}&nbsp;
        </Text>
        <Selects>
          <StyledSelect
            margin="0 10px 0 0"
            defaultValue={{value: "semicircle", label: "Semicircle"}}
            options={[
              {value: "semicircle", label: "Semicircle"},
              {value: "sunburst", label: "Sunburst"},
            ]}
            onChange={({ value }: {value: "semicircle" | "sunburst"}) => setType(value)}
          />
          {type === "semicircle" && <StyledSelect
            defaultValue={{value: "parties", label: "Parties"}}
            options={groups.length === 0 ? [
              {value: "parties", label: "Parties"},
              {value: "epgroups", label: "EP-Groups"},
              {value: "euparties", label: "Europarties"},
            ] : [
              {value: "parties", label: "Parties"},
              {value: "groups", label: "Groups"},
              {value: "epgroups", label: "EP-Groups"},
              {value: "euparties", label: "Europarties"},
            ]}
            onChange={({ value }: {value: "parties" | "groups" | "epgroups" | "euparties"}) => setMethodSemi(value)}
          />}
          {type === "sunburst" && <StyledSelect
            defaultValue={{value: "eg-ep-p", label: "EG -> EP -> P"}}
            options={[
              {value: "eg-ep-p", label: "EG -> EP -> P"},
              {value: "ep-eg-p", label: "EP -> EG -> P"},
            ]}
            onChange={({ value }: {value: "eg-ep-p" | "ep-eg-p"}) => setMethodSun(value)}
          />}
        </Selects>
      </Top>
      {type === "semicircle" && <Semicircle data={convertSeats(seats, groups) as DataSemicircle[]} />}
      {type === "sunburst" && <Sunburst data={convertSeats(seats, groups) as DataSunburst } />} 
    </Container>
  )
}

export default ParliamentDiagram;
