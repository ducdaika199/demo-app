import { Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeScreen } from '@/components/template';
import { styles } from './style';

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
