import { MDXProvider as MDXProviderOriginal, MDXProviderProps } from "@mdx-js/react";
import { Fragment } from "react";
import Link from "./Link";
import Text from "./Text";

const MDXProvider = (props: Omit<MDXProviderProps, 'components'>) => {
  return (
    <MDXProviderOriginal
      components={{
        p: (props) => <Text type="p" {...props} />,
        a: (props) => <Link {...props} />,
        'JSX': (props: any) => <Fragment {...props} />,
      }}
      {...props}
    />
  );
};

export default MDXProvider;
