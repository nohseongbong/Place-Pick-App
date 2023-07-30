import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../styles/logoutStyle';
import {managementStore} from '../store/managementStore';

const Logout = observer(() => {
  const styles = style();

  const onPressWithdrawal = () => {
    managementStore.setIsModal(true);
  };

  return (
    <View style={styles.container}>
      <CustomTouchable style={styles.logout_wrap}>
        <CustomText style={styles.content_text}>로그아웃</CustomText>
      </CustomTouchable>
      <CustomText onPress={onPressWithdrawal} style={styles.withdrawal_text}>
        회원탈퇴
      </CustomText>
    </View>
  );
});

export default Logout;
