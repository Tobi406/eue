import React from "react";
import useSWR from "swr/immutable";
import parse from "html-react-parser";

const Diagram = ({
  children,
  type,
}: {
  children: string,
  type: string,
}) => {
  const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) => fetch(input, init).then(res => res.text());

  const body = {
    diagram_source: children,
    diagram_type: type,
    output_format: "svg",
  };
  const { data, error } = useSWR('https://kroki.io/', url => fetcher(url, {
    method: 'POST',
    body: JSON.stringify(body),
  }));

  if (data) return parse(data);
  return <p>Loading diagram...</p>
};

export default Diagram;
