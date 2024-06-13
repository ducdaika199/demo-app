import { Text, View, ScrollView } from 'react-native';
import { SafeScreen } from '@/components/template';

function Profile() {
  return (
    <SafeScreen>
      <ScrollView>
        <View>
          <Text>Test</Text>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Profile;
