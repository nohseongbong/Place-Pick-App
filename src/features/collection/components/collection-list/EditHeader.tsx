import React from 'react';
import {View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import style from '../../styles/editHeaderStyle';
import {collectionStore} from '../../store/collectionStore';

const EditHeader = () => {
  const styles = style();

  const onPressComplete = () => {
    collectionStore.setIsEdit(false);
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title_text}>편집</CustomText>
      <CustomTouchable onPress={onPressComplete} style={styles.button_wrap}>
        <CustomText style={styles.button_text}>완료</CustomText>
      </CustomTouchable>
    </View>
  );
};

export default EditHeader;
