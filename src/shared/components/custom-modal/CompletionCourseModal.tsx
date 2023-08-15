import React from 'react';
import CustomModal from './CustomModal';
import style from './styles/completionCourseModalStyle';
import {View} from 'react-native';
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CompletionCourseModal = ({isVisible, onClose}: ModalProps) => {
  const styles = style();

  return (
    <CustomModal style={styles.container} isVisible={isVisible} backdropOpacity={0.3} onBackdropPress={onClose}>
      <View style={styles.wrap}>
        <CustomText style={styles.text}>코스가 저장되었습니다.</CustomText>
        <View style={styles.btn_wrap}>
          <CustomTouchable style={[styles.btn]}>
            <CustomText style={[styles.btn_text]}>보러가기</CustomText>
          </CustomTouchable>
          <CustomTouchable style={[styles.btn, styles.btn_primary]}>
            <CustomText style={[styles.btn_text, styles.btn_text_primary]}>친구에게 공유</CustomText>
          </CustomTouchable>
        </View>
      </View>
    </CustomModal>
  );
};

export default CompletionCourseModal;
