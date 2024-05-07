import React from 'react';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/deleteBarStyle';
import {collectionStore} from '../../store/collectionStore';

const DeleteBar = observer(() => {
  const styles = style();

  const onPressDelete = () => {
    collectionStore.setIsDeleteModal(true);
  };

  return (
    <CustomTouchable
      disabled={!collectionStore.getIsSelected}
      onPress={onPressDelete}
      style={[
        styles.container,
        collectionStore.getIsSelected && styles.active_wrap,
      ]}>
      {collectionStore.getIsSelected ? (
        <SVG_IMG.TRASH_WHITE />
      ) : (
        <SVG_IMG.TRASH_GRAY />
      )}
      <CustomText
        style={[
          styles.text,
          collectionStore.getIsSelected && styles.active_text,
        ]}>
        삭제하기
      </CustomText>
    </CustomTouchable>
  );
});

export default DeleteBar;
