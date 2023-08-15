/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Reactotron from 'reactotron-react-native';

import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => Reactotron.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
