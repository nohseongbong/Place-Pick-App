import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomToast} from './src/lib/toast/components/CustomToast';
import {spinnerStore} from './src/shared/store/spinnerStore';
import FullScreenSpinner from './src/shared/components/spinner/FullScreenSpinner';
const App = observer(() => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {spinnerStore.isState && <FullScreenSpinner />}
        <RootNavigator />
        <CustomToast />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
});

export default App;
