import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/navigation/paramsType';
import CustomTouchable from '../../customComponents/CustomTouchable';
import CustomText from '../../customComponents/CustomText';
const HomeDetailHeader = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#000',
      }}>
      <CustomTouchable
        style={{height: '100%', width: 60, justifyContent: 'center', alignItems: 'center'}}
        onPress={onPressGoBack}>
        <CustomText>뒤로가기</CustomText>
      </CustomTouchable>
    </View>
  );
};

export default HomeDetailHeader;
