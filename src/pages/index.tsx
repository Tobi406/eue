import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import parties from 'src/data/member-states/parties';
import ParliamentDiagram from 'src/modules/parliamentDiagram/semicircle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>Hello World!</span>
      <code>{JSON.stringify(parties)}</code>
      {[...Array(100).keys()].map((n, ind) => <p key={ind}>testest</p>)}
    </div>
  )
}
