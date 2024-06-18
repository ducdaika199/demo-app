/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { ahSDK } from 'ahsdk';
import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('@/reactotron.config');
}

AppRegistry.registerComponent(appName, () => {
  ahSDK.init(
    {
      apiKey: 'aw4-U8nvuHMhhirn1VN0xfgRk0c2a5J3R3gfDE-qWlo',
      apiSecret: 'MDoEQubJNTcoojZ88sIhGIaRKLazwzBf0LOYcPubgG4=',
      environment: 'staging',
      onRefreshTokenError: () => {},
    },
    {
      apiKey: 'aw4-U8nvuHMhhirn1VN0xfgRk0c2a5J3R3gfDE-qWlo',
      apiSecret: 'MDoEQubJNTcoojZ88sIhGIaRKLazwzBf0LOYcPubgG4=',
      environment: 'staging',
      onRefreshTokenError: () => {},
    }
  );

  return App;
});
