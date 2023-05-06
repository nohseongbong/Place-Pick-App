import React from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {RootStackParamList} from '../../shared/types/navigation/pramsType';
import {STACK_NAME} from '../../shared/constants/navigation';
import CustomText from '../../shared/components/customComponents/CustomText';
import style from './styles/splashContainerStyle';
import {requestLocationPermission} from '../../shared/utils/permission';
import {getGeoLocation} from '../../shared/utils/getGeoLocation';
import {userStore} from '../../shared/store/userStore';

const SplashContainer = () => {
  const store = userStore;
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const styles = style();

  const setLocation = async () => {
    if (await requestLocationPermission()) {
      getGeoLocation();
    }
    setTimeout(() => {
      navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
    }, 2000);
  };
  useFocusEffect(
    React.useCallback(() => {
      setLocation();
    }, []),
  );

  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>스플래시 화면</CustomText>
    </View>
  );
};

export default SplashContainer;
