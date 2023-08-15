import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../../../types/navigation/paramsType';
import CustomTouchable from '../../customComponents/CustomTouchable';
import style from '../styles/backPressTextHeaderStyle';
import {SVG_IMG} from '../../../../assets/images';
import CustomText from '../../customComponents/CustomText';

interface Props {
  text: string;
}

const BackPressTextHeader = ({text}: Props) => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <CustomTouchable style={styles.back_btn_wrap} onPress={onPressGoBack}>
        <SVG_IMG.BACK_ICON width={25} height={17} />
      </CustomTouchable>
      <CustomText style={styles.text}>{text}</CustomText>
    </View>
  );
};

export default BackPressTextHeader;
