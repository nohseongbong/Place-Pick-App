import React from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {SCREEN_NAME, STACK_NAME} from '../../shared/constants/navigation';
import CustomText from '../../shared/components/customComponents/CustomText';
import style from './styles/splashContainerStyle';
import {requestLocationPermission} from '../../shared/utils/permission';
import {getGeoLocation} from '../../shared/utils/getGeoLocation';
import {userStore} from '../../shared/store/userStore';
import {RootStackParamList} from '../../shared/types/navigation/paramsType';
import {SVG_IMG} from '../../assets/images';

const SplashContainer = () => {
  const store = userStore;
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const styles = style();

  const setLocation = async () => {
    if (await requestLocationPermission()) {
      getGeoLocation();
    }
    setTimeout(() => {
      navigation.reset({routes: [{name: SCREEN_NAME.ONBOARDING}]});
      // navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
    }, 2000);
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
