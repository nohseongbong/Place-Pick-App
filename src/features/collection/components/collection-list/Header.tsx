import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/headerStyle';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {wt} from '../../../../lib/responsiveSize';
import {MainStackParamList} from '../../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../../shared/constants/navigation';

const Header = () => {
  const styles = style();
  const navigation: NavigationProp<MainStackParamList> = useNavigation();

  const onPressEdit = () => {
    navigation.navigate(SCREEN_NAME.MYSETTING);
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title_text}>내가 만든 코스</CustomText>
      <CustomTouchable onPress={onPressEdit} style={styles.icon_wrap}>
        <SVG_IMG.EDIT width={wt(20)} height={wt(20)} />
      </CustomTouchable>
    </View>
  );
};

export default Header;
