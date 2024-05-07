import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../../../types/navigation/paramsType';
import CustomTouchable from '../../customComponents/CustomTouchable';
import {SVG_IMG} from '../../../../assets/images';
import {STACK_NAME} from '../../../constants/navigation';
import style from '../styles/mainHeaderStyle';

const MainHeader = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressGoBack = () => {
    navigation.navigate(STACK_NAME.MAIN);
  };
  return (
    <View style={styles.container}>
      <CustomTouchable style={styles.logo_wrap} onPress={onPressGoBack}>
        <SVG_IMG.LOGO width={28} height={28} />
      </CustomTouchable>
    </View>
  );
};

export default MainHeader;
