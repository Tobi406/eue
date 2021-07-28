import { FC, ReactElement, useEffect, useRef } from "react";
import * as d3 from 'd3';
import d3Parliament from 'd3-parliament';

const ParliamentDiagram: FC<{}> = (): ReactElement => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    draw();
  });

  const draw = () => {
    let parliament = d3Parliament(d3).width(600).innerRadiusCoef(0.4);
    parliament.enter.fromCenter(true).smallToBig(true);
    parliament.exit.toCenter(true).bigToSmall(true);
    parliament.on("click", function({ data}) { console.log(data); });

    d3.select(ref.current).datum([
      {
          "id": "gue-ngl",
          "legend": "GUE-NGL",
          "name": "European United Left–Nordic Green Left",
          "seats": 52
      },
      {
          "id": "sd",
          "legend": "S&D",
          "name": "Progressive Alliance of Socialists and Democrats",
          "seats": 189
      },
      {
          "id": "greens-efa",
          "legend": "Greens-EFA",
          "name": "The Greens–European Free Alliance",
          "seats": 50
      },
      {
          "id": "alde",
          "legend": "ALDE",
          "name": "Alliance of Liberals and Democrats for Europe Group",
          "seats": 70
      },
      {
          "id": "epp",
          "legend": "EPP",
          "name": "European People's Party Group",
          "seats": 215
      },
      {
          "id": "ecr",
          "legend": "ECR",
          "name": "European Conservatives and Reformists",
          "seats": 74
      },
      {
          "id": "efdd",
          "legend": "EFDD",
          "name": "Europe of Freedom and Direct Democracy",
          "seats": 46
      },
      {
          "id": "enf",
          "legend": "ENF",
          "name": "Europe of Nations and Freedom",
          "seats": 39
      },
      {
          "id": "no-party",
          "legend": "Non-Inscrits",
          "name": "Non-Inscrits",
          "seats": 16
      }
    ]).call(parliament);
  }

  return (
    <svg ref={ref} />
  )
}

export default ParliamentDiagram;