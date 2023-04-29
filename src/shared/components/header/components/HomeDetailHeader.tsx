import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/navigation/pramsType';
import CustomTouchable from '../../customComponents/CustomTouchable';
import CustomText from '../../customComponents/CustomText';
const HomeDetailHeader = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight ?? 30;

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        width: '100%',
        height: 60 + StatusBarHeight,
      }}>
      <View
        style={{
          width: '100%',
          height: StatusBarHeight,
          backgroundColor: 'blue',
        }}
      />
      <CustomTouchable
        style={{height: '100%', width: 60, justifyContent: 'center', alignItems: 'center'}}
        onPress={onPressGoBack}>
        <CustomText>{StatusBarHeight}</CustomText>
      </CustomTouchable>
    </View>
  );
};

export default HomeDetailHeader;
