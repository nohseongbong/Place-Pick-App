import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../styles/logoutStyle';
import {managementStore} from '../store/managementStore';
import {authStore} from '../../../../shared/store/authStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '../../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../../shared/constants/navigation';

const Logout = observer(() => {
  const styles = style();
  const navigation: NavigationProp<TabStackParamList> = useNavigation();

  const onPressWithdrawal = () => {
    managementStore.setIsModal(true);
  };

  const onPressLogout = () => {
    authStore.logout();
    navigation.navigate(SCREEN_NAME.HOME);
  };

  return (
    <View style={styles.container}>
      <CustomTouchable onPress={onPressLogout} style={styles.logout_wrap}>
        <CustomText style={styles.content_text}>로그아웃</CustomText>
      </CustomTouchable>
      <CustomText onPress={onPressWithdrawal} style={styles.withdrawal_text}>
        회원탈퇴
      </CustomText>
    </View>
  );
});

export default Logout;
