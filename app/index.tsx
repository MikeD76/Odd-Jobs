import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Link href="/JobForum">
        <Button title="Go to Job Forum" />
      </Link>
    </View>
  );
}
