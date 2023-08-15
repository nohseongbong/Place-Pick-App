import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../../../shared/types/navigation/paramsType';

import BackPressTextHeader from '../../../../shared/components/header/components/BackPressTextHeader';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../styles/mySettingContainerStyle';
import {SVG_IMG} from '../../../../assets/images';
import {ht, wt} from '../../../../lib/responsiveSize';
import {SCREEN_NAME} from '../../../../shared/constants/navigation';
import {LegalType} from '../../terms/constants/terms.const';

const MySettingContainer = () => {
  const styles = style();

  const navigation: NavigationProp<MainStackParamList> = useNavigation();

  const onPress = (name: string) => {
    switch (name) {
      case '계정관리':
        navigation.navigate(SCREEN_NAME.MANAGEMENT);
        break;
      case '이용약관':
        navigation.navigate(SCREEN_NAME.TERMS, {type: LegalType.TERMS});
        break;
    }
  };

  return (
    <>
      <BackPressTextHeader text="설정" />
      <View style={styles.container}>
        <CustomTouchable onPress={() => onPress('계정관리')} style={styles.btn_wrap}>
          <CustomText style={styles.title}>계정 관리</CustomText>
          <SVG_IMG.BACK_ICON rotation={180} width={wt(6)} height={ht(11)} />
        </CustomTouchable>
        <CustomTouchable onPress={() => onPress('이용약관')} style={[styles.btn_wrap, {borderBottomWidth: 0}]}>
          <CustomText style={styles.title}>이용 약관</CustomText>
          <SVG_IMG.BACK_ICON rotation={180} width={wt(6)} height={ht(11)} />
        </CustomTouchable>
      </View>
    </>
  );
};

export default MySettingContainer;
