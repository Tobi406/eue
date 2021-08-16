import { FC, ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { SunburstChartInstance } from "sunburst-chart";


const Container = styled.div`
  width: 300px;

  .sunburst-tooltip {
    z-index: 50;
  }
`;

interface SunburstData {
  name: string,
  color?: string,
}

export interface DataValue extends SunburstData {
  value: number,
  state?: string,
};
export interface DataChildren extends SunburstData {
  children: DataSunburst[],
};

export type DataSunburst = DataValue | DataChildren;

const Sunburst: FC<{
  data: DataSunburst,
}> = ({ data }): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    draw(data);
  });

  const getTotal = (children: DataSunburst) => {
    let total = 0;
    if ('children' in children) { // is DataChildren => no value
      children.children.forEach(child => total += getTotal(child));
    } else { // is DataValue => a value
      total += children.value;
    }
    return total;
  };
  const total = getTotal(data);

  const draw = (data: DataSunburst) => {
    Array.from(ref.current!.children).forEach(element => element.remove());
    console.log(data);
    const chart: SunburstChartInstance = require('sunburst-chart').default();
    chart
      .width(300)
      .height(300)
      .excludeRoot(true)
      .data(data)
      .color(node => node.color)
      .tooltipTitle((d, node) =>
        `${node.data.name}<img src="https://flag.pk/flags/4x3/${(node.data.state ?? 'EU').toLowerCase()}.svg" />`
      )
      .tooltipContent((d, node) => {
        const nextLevel = (node.value / (node?.parent?.value ?? node.value)) * 100;
        const fromTotal = (node.value / total) * 100;
        return `Seats: ${node.value}<br /> From next level: ${nextLevel.toFixed(2)}%<br />From total: ${fromTotal.toFixed(2)}%`
      })
      (ref.current!);
    
  };

  return (
    <Container
      ref={ref}
    />
  )
}

export default Sunburst;
