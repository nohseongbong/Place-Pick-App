import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import BackPressTextHeader from '../../../../shared/components/header/components/BackPressTextHeader';
import style from '../styles/managementContainerStyle';
import Logout from './Logout';
import UserInfo from './UserInfo';
import WithdrawalModal from '../../../../shared/components/custom-modal/WithdrawalModal';
import {managementStore} from '../store/managementStore';

const ManagementContainer = observer(() => {
  const styles = style();

  return (
    <>
      <BackPressTextHeader text="계정 관리" />
      <View style={styles.container}>
        <UserInfo />
        <Logout />
      </View>
      <WithdrawalModal
        isVisible={managementStore.isModal}
        onClose={managementStore.onCloseModal}
        onPress={managementStore.fetchWithdrawal}
      />
    </>
  );
});

export default ManagementContainer;
