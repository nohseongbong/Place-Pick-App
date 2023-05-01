import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import CustomSafeAreaView from '../../../shared/components/customComponents/CustomSafeAreaView';
import HomeDetailHeader from '../../../shared/components/header/components/HomeDetailHeader';

import {api} from '../../../shared/api/api';
import CustomTextInput from '../../../shared/components/customComponents/CustomTextInput';

const SearchContainer = observer(() => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <CustomSafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <HomeDetailHeader />
      <CustomText>검색 페이지</CustomText>
      <CustomTextInput />
    </CustomSafeAreaView>
  );
});

export default SearchContainer;
