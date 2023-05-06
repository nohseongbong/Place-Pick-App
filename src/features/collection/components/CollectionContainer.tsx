import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';

const CollectionContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <CustomTouchable
        style={{height: '100%', width: 60, justifyContent: 'center', alignItems: 'center', marginTop: 60}}
        onPress={onPressGoBack}>
        <CustomText>뒤로가기</CustomText>
      </CustomTouchable>
    </View>
  );
};

export default CollectionContainer;
