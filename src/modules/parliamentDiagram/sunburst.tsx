import { FC, ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";
import { SunburstChartInstance } from "sunburst-chart";


const Container = styled.div`
  width: 300px;
`;

interface SunburstData {
  name: string,
  color?: string,
}

export interface DataValue extends SunburstData {
  value: number,
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

  const draw = (data: DataSunburst) => {
    Array.from(ref.current!.children).forEach(element => element.remove());
    const chart: SunburstChartInstance = require('sunburst-chart').default();
    chart
      .width(300)
      .height(300)
      .excludeRoot(true)
      .color(node => node.color)
      .data(data ?? {
        name: "root",
        color: "#c5c5c5",
        children: [
          {
            name: "leafA",
            value: 3
          },
          {
            name: "nodeB",
            children: [
              {
                name: "leafBA",
                value: 5
              },
              {
                name: "leafBB",
                value: 1
              }
            ]
          }
        ]
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
