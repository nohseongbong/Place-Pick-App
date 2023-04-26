import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';

const CollectionContainer = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <CustomText onPress={onPressGoBack} style={{marginTop: 60}}>
        컬렉션 페이지.
      </CustomText>
    </View>
  );
};

export default CollectionContainer;
