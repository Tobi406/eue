import Text from 'src/common/Text';
import memberStates from 'src/data/member-states/memberStates';

export default function Home() {
  return (
    <div>
      <Text type="h2">
        Welcome to EUE
      </Text>
      <code>
        {JSON.stringify(memberStates)}
      </code>
    </div>
  )
}
