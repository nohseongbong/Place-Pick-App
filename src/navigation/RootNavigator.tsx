import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/pramsType';
import {SCREEN_NAME, NANIGATOR_NAME} from '../constants/navigation';
import {palette} from '../constants/palette';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import CustomSafeAreaView from '../components/customComponents/CustomSafeAreaView';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <CustomSafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={palette.BACKGROUND} />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          navigationBarColor: palette.BACKGROUND,
        }}
        initialRouteName={SCREEN_NAME.SPLASH}>
        <RootStack.Screen name={SCREEN_NAME.SPLASH} component={SplashScreen} />
        <RootStack.Screen name={NANIGATOR_NAME.MAIN} component={MainNavigator} />
        <RootStack.Group screenOptions={{animation: 'slide_from_bottom'}}>
          <RootStack.Screen name={NANIGATOR_NAME.AUTH} component={AuthNavigator} />
        </RootStack.Group>
      </RootStack.Navigator>
    </CustomSafeAreaView>
  );
};

export default RootNavigator;
