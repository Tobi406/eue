import { MDXProvider as MDXProviderOriginal, MDXProviderProps } from "@mdx-js/react";
import { Fragment } from "react";
import Link from "./Link";
import Text from "./Text";

const text = (type: string) => (props: any) => <Text type={type} {...props} />;

const MDXProvider = (props: Omit<MDXProviderProps, 'components'>) => {
  return (
    <MDXProviderOriginal
      components={{
        p: text('p'),
        span: text('span'),
        a: (props) => <Link {...props} />,
        h1: text('h1'),
        h2: text('h2'),
        h3: text('h3'),
        h4: text('h4'),
      }}
      {...props}
    />
  );
};

export default MDXProvider;
