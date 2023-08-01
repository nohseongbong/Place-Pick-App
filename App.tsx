import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomToast} from './src/lib/toast/components/CustomToast';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigator />
        <CustomToast />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
