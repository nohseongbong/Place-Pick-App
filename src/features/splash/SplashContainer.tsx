import React from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {RootStackParamList} from '../../shared/types/navigation/pramsType';
import {STACK_NAME} from '../../shared/constants/navigation';
import CustomText from '../../shared/components/customComponents/CustomText';
import style from './styles/splashContainerStyle';

const SplashContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const styles = style();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
      }, 2000);
    }, []),
  );

  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>스플래시 화면</CustomText>
    </View>
  );
};

export default SplashContainer;
