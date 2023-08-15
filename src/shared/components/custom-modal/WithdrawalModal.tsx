import React from 'react';
import {View} from 'react-native';

import CustomModal from './CustomModal';
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';
import style from './styles/withdrawalStyle';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
}

const WithdrawalModal = ({isVisible, onClose, onPress}: ModalProps) => {
  const styles = style();

  return (
    <CustomModal style={styles.container} isVisible={isVisible} backdropOpacity={0.3} onBackdropPress={onClose}>
      <View style={styles.wrap}>
        <View style={styles.text_wrap}>
          <CustomText style={styles.text}>정말로 탈퇴하겠어요?</CustomText>
          <CustomText style={styles.text}>탈퇴하면 계정을 복구할 수 없어요</CustomText>
        </View>
        <View style={styles.btn_wrap}>
          <CustomTouchable onPress={onClose} style={[styles.btn]}>
            <CustomText style={[styles.btn_text]}>취소</CustomText>
          </CustomTouchable>
          <CustomTouchable onPress={onPress} style={[styles.btn, styles.btn_primary]}>
            <CustomText style={[styles.btn_text, styles.btn_text_primary]}>삭제하기</CustomText>
          </CustomTouchable>
        </View>
      </View>
    </CustomModal>
  );
};

export default WithdrawalModal;
