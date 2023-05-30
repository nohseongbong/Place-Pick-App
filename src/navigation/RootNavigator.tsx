import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME, STACK_NAME} from '../shared/constants/navigation';
import {palette} from '../shared/constants/palette';
import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import CustomSafeAreaView from '../shared/components/customComponents/CustomSafeAreaView';
import {RootStackParamList} from '../shared/types/navigation/paramsType';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <>
      {/* <CustomSafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={palette.BACKGROUND} /> */}
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          navigationBarColor: palette.BACKGROUND,
        }}
        initialRouteName={SCREEN_NAME.SPLASH}>
        <RootStack.Screen name={SCREEN_NAME.SPLASH} component={SplashScreen} />
        <RootStack.Screen name={STACK_NAME.MAIN} component={MainNavigator} />
        <RootStack.Group screenOptions={{animation: 'slide_from_bottom'}}>
          <RootStack.Screen name={STACK_NAME.AUTH} component={AuthNavigator} />
        </RootStack.Group>
      </RootStack.Navigator>
      {/* </CustomSafeAreaView> */}
    </>
  );
};

export default RootNavigator;
