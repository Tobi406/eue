import Text from 'src/common/Text';
import memberStates from 'src/data/member-states/memberStates';
import parties from 'src/data/member-states/parties';

export default function Home() {
  return (
    <div>
      <Text type="h2">
        Welcome to EUE
      </Text>
      <code>
        {JSON.stringify(memberStates)}
        {JSON.stringify(parties)}
      </code>
    </div>
  )
}
