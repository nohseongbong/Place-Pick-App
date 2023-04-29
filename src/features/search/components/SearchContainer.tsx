import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';

const SearchContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View>
      <CustomText>검색 페이지</CustomText>
    </View>
  );
};

export default SearchContainer;
