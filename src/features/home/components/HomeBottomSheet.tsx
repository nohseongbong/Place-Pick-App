import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import style from '../styles/homeBottomSheetStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import CustomText from '../../../shared/components/customComponents/CustomText';

const HomeBottomSheet = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <CustomText>바텀싯트</CustomText>
    </View>
  );
};

export default HomeBottomSheet;
