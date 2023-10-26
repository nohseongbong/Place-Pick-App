import React from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {View} from 'react-native';
import {SCREEN_NAME, STACK_NAME} from '../../shared/constants/navigation';
import CustomText from '../../shared/components/customComponents/CustomText';
import style from './styles/splashContainerStyle';
import {requestLocationPermission} from '../../shared/utils/permission';
import {getGeoLocation} from '../../shared/utils/getGeoLocation';
import {RootStackParamList} from '../../shared/types/navigation/paramsType';
import {SVG_IMG} from '../../assets/images';
import {getStorage} from '../../lib/storage';
import {authStore} from '../../shared/store/authStore';

const SplashContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const styles = style();

  const setLocation = async () => {
    if (await requestLocationPermission()) {
      getGeoLocation();
    }
    const isFirstLaunch = await getStorage('FirstLaunch');
    setTimeout(() => {
      checkAuthLogin();
      if (!isFirstLaunch || isFirstLaunch === undefined) {
        navigation.reset({routes: [{name: SCREEN_NAME.ONBOARDING}]});
      } else {
        navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
      }
    }, 2000);
  };

  const action = () => {
    navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
  };

  const checkAuthLogin = async () => {
    const authLogin = await getStorage('AuthLogin');
    console.log(authLogin, ': authLogin');
    if (authLogin) {
      authStore.login({
        token: authLogin.token,
        providerType: authLogin.providerType,
        action: action,
      });
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      setLocation();
    }, []),
  );

  return (
    <View style={styles.container}>
      <SVG_IMG.SPLASH_LOGO width={80} height={80} />
      <CustomText style={styles.text}>플레이스픽</CustomText>
    </View>
  );
};

export default SplashContainer;
