import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import style from '../styles/homeContainerStyle';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {STACK_NAME} from '../../../shared/constants/navigation';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {IMG, SVG_IMG} from '../../../assets/images';

const HomeContainer = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <CustomText>홈 페이지.</CustomText>
      <SVG_IMG.LOGO width={24} />
      <Image source={IMG.FOOD_CATEGORY} />
      <TouchableOpacity style={styles.test_PR_btn} onPress={() => navigation.navigate(STACK_NAME.AUTH)}>
        <CustomText>로그인 페이지 이동</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default HomeContainer;
