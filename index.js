import {AppRegistry} from 'react-native';
import CodePush from 'react-native-code-push';
import App from './App';
import Reactotron from 'reactotron-react-native';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => Reactotron.log('Reactotron Configured'));
}

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    descriptionPrefix: '\n\n업데이트 내용:\n',
    title: '새로운 업데이트가 있습니다',
    mandatoryUpdateMessage: '',
    mandatoryContinueButtonLabel: '업데이트',
    optionalIgnoreButtonLabel: '나중에',
    optionalInstallButtonLabel: '지금 업데이트',
    optionalUpdateMessage: '지금 바로 새로운 업데이트를 설치할 수 있습니다.',
  },
};

const CodePushedApp = CodePush(codePushOptions)(App);

AppRegistry.registerComponent(appName, () => CodePushedApp);
