import React from 'react';
import {Platform, StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME, STACK_NAME} from '../shared/constants/navigation';
import {palette} from '../shared/constants/palette';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import CustomSafeAreaView from '../shared/components/customComponents/CustomSafeAreaView';
import {RootStackParamList} from '../shared/types/navigation/paramsType';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import useUrlScheme from '../shared/hooks/useUrlSheme';
import {spinnerStore} from '../shared/store/spinnerStore';
import FullScreenSpinner from '../shared/components/spinner/FullScreenSpinner';
import {observer} from 'mobx-react-lite';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = observer(() => {
  useUrlScheme();

  return (
    <>
      <CustomSafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarColor: palette.BACKGROUND,
            animation: Platform.OS === 'android' ? 'default' : 'fade',
          }}
          initialRouteName={SCREEN_NAME.SPLASH}>
          <RootStack.Screen name={SCREEN_NAME.SPLASH} component={SplashScreen} />
          <RootStack.Screen name={SCREEN_NAME.ONBOARDING} component={OnBoardingScreen} />
          <RootStack.Screen name={STACK_NAME.MAIN} component={MainNavigator} />
          <RootStack.Group screenOptions={{animation: 'slide_from_bottom'}}>
            <RootStack.Screen name={STACK_NAME.AUTH} component={AuthNavigator} />
          </RootStack.Group>
        </RootStack.Navigator>
      </CustomSafeAreaView>
      {spinnerStore.isState && <FullScreenSpinner />}
    </>
  );
});

export default RootNavigator;
