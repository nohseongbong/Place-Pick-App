import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import style from './styleSheet';
import CustomText from '../customComponents/CustomText';
import {STACK_NAME} from '../../constants/navigation';
import {RootStackParamList} from '../../types/navigation/pramsType';

const HomeContainer = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <CustomText>홈 페이지.</CustomText>
      <TouchableOpacity style={styles.test_PR_btn} onPress={() => navigation.navigate(STACK_NAME.AUTH)}>
        <CustomText>로그인 페이지 이동</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default HomeContainer;
