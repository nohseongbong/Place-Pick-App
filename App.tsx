import {KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomToast} from './src/lib/toast/components/CustomToast';
import {observer} from 'mobx-react-lite';

const App = observer(() => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigator />
          <CustomToast />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
});

export default App;
