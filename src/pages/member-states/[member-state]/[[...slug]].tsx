import { GetStaticProps } from "next";
import memberStates from "src/data/member-states/memberStates";
import TerritorialAuthority, { TerritorialAuthorities } from "src/data/models/TerritorialAuthority";
import getNutsCode from "src/modules/map/getNutsCode";
import TerritorialAuthorityDisplay from "src/modules/territorialAuthorityDisplay";
import fs from 'fs/promises';
import pathPackage from 'path';
import { serialize } from 'next-mdx-remote/serialize';

interface PropsType {
  ta: TerritorialAuthority,
}

const Page = ({
  ta,
}: PropsType) => {
  return (
    <TerritorialAuthorityDisplay
      ta={ta}
    />
  );
}

export default Page;

const getFiles = async (path: string) => {
  let collectedFiles: {[key: string]: any} = {};
  const files = await fs.readdir(`src/data/${path}`);
  const markdownFiles = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      name: file,
      path: pathPackage.join(process.cwd(), `src/data${path}${file}`),
    }));

  for (let i = 0; i < markdownFiles.length; i++) {
    const file = markdownFiles[i]; 
    const markdownFile = (await fs.readFile(file.path, 'utf-8'));
    collectedFiles[file.name] = markdownFile;
  }
  collectedFiles = Object.fromEntries(
    await Promise.all(
      Object.entries(collectedFiles)
        .map(async ([key, value]) => ([key, await serialize(value)]))
    ) // map trough collectedFiles, but async
  );
  return collectedFiles;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props: PropsType = {} as any;


  const failed = () => {
    return {
      notFound: true,
    } as any;
  };

  let ta: TerritorialAuthority = undefined as any;
  let { 'member-state': memberState, slug } = context.params!;
  memberState = memberState as string;

  const getSubdivisions = (slug: string | string[]) => {
    if (slug.length >= 2 && Array.isArray(slug)) {
      if (slug[0] === 'subdivisions') {
        ta = (ta?.subdivisions?.[slug[1]] as TerritorialAuthority) ?? ta;
        slug.shift();
        slug.shift();
        if (slug.length >= 2) getSubdivisions(slug);
      }
    }
  };

  if (memberState === undefined) return failed();
  ta = memberStates[memberState];

  if (slug !== undefined) {
    getSubdivisions(slug);
  }


  if (ta === undefined) return failed();
  if (ta.nutsCode === undefined) {
    if ('epDelegation' in ta) {
      ta.nutsCode = ta.abbr ?? ta.name;
    } else {
      ta.nutsCode = getNutsCode(ta.name);
    }
  }

  const path = `/member-states/${memberState}/${slug !== undefined ? (Array.isArray(slug) ? slug.join('/') : slug) : ''}`;
  ta.files = await getFiles(path);


  props.ta = ta;
  
  return {
    props: props,
  };
}

const getPaths = () => {
  const getForSubdivisions = (parent: string, subdivisions?: TerritorialAuthorities) => {
    if (subdivisions === undefined) return;
    Object.entries(subdivisions)
      .forEach(([taName, { subdivisions }]) => {
        const currentPath = `${parent}/subdivisions/${taName}`;
        paths.push(currentPath);
        getForSubdivisions(currentPath, subdivisions);
      });
  }

  const paths: string[] = [];
  Object.entries(memberStates)
    .forEach(([memberState, { subdivisions }]) => {
      const currentPath = `/member-states/${memberState}`;
      paths.push(currentPath);
      getForSubdivisions(currentPath, subdivisions);
    });
  return paths;
} 

export async function getStaticPaths() {
  return {
    paths: getPaths(),
    fallback: false,
  }
}
