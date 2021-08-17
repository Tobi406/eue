import { FC, ReactElement, useEffect, useRef, useState } from "react";
import * as d3 from 'd3';
import d3Parliament from 'd3-parliament';
import styled from "styled-components";
import Icon from "src/common/Icon";
import Text from "src/common/Text";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { grayscale } from "polished";
import { UIDConsumer } from "react-uid";

const Container = styled.div`
  width: 300px;
  user-select: none;
  display: flex;
  flex-direction: column;
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
`;

const ParliamentSVG = styled.svg`
  .parliament {
    circle {
      transition: fill .25s ease-in-out;
    }
  }
`;

export interface DataSemicircle {
  id: string,
  color: string,
  seats: number,
};

const Semicircle: FC<{
  data: DataSemicircle[],
}> = ({ data }): ReactElement => {
  interface DataItem {
    id: string,
    color: string,
    seats: number,
  }
  
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    draw(data.map(d => ({...d, id: d.id.replace(/\s/g, '&sp;')})));
  });

  const [focus, setFocus] = useState<string[]>([]);
  const changeFocus = (toChange: string) => {
    const newFocus = focus.includes(toChange) ? focus.filter(v => v !== toChange) : [...focus, toChange];
    const ids = Object.values(data).map(p => p.id);
    if ((newFocus.length === ids.length) && (newFocus.every(v => ids.includes(v)))) {
      setFocus([]);
    } else {
      setFocus(newFocus);
    }
  }

  const draw = (data: DataSemicircle[]) => {
    let parliament = d3Parliament(d3).width(600).innerRadiusCoef(0.4);
    parliament.enter.fromCenter(true).smallToBig(true);
    parliament.exit.toCenter(true).bigToSmall(true);
    parliament.on("click", function({ data}) { console.log(data); });
    parliament.on("mouseenter", function ({ data, event }) {
      changeFocus(data.party.id);
    });
    parliament.on("mouseleave", function ({ data }) {
      setFocus([]);
    });
    

    const selected = d3.select(ref.current);
    const parliamentSelection = selected.datum(data).call(parliament)
      .select(".parliament");
      parliamentSelection
        .selectAll("*")
          .attr("data-tip", "html");
      parliamentSelection
        .select("#countText")
          .remove();
      parliamentSelection
        .append("text")
          .attr("id", "countText")
          .attr("y", "-10")
          .attr("text-anchor", "middle")
          .attr("font-size", "4em")
          .attr("font-weight", "bold")
          .text(data.map(d => d.seats).reduce((a, b) => a + b));
  }

  const cssEscape = (toEscape: string) => {
    return toEscape
      .replace(/\s/g, '&sp;')
      .replace(/&/g, '\\&')
      .replace(/;/g, '\\;')
      .replace(/\//g, '\\/');
  }

  return (
    <UIDConsumer>{(id, uid) => 
      <Container data-id={id}>
        <ParliamentSVG
          viewBox="0 0 600 300"
          width="300px"
          ref={ref}
        />
        <style dangerouslySetInnerHTML={{__html: data.map(party => `${Container.toString()}[data-id="${id}"] svg .parliament .seat.${cssEscape(party.id)} {
            fill: ${(focus.length > 0 && !focus.includes(party.id)) ? grayscale(party.color) : party.color};
          }`).join('\n')}}
        />
        <Legend>
          {data.map((party, index) => <LegendItem
            key={index}
            onClick={() => changeFocus(party.id)}
          >
            <Icon
              icon={faCircle}
              color={party.color} 
            />
            <Text>
              {party.id}
            </Text>
          </LegendItem>)}
        </Legend>
      </Container>
    }</UIDConsumer>
  )
}

export default Semicircle;