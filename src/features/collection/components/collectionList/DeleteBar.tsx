import React from 'react';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/deleteBarStyle';

const DeleteBar = observer(() => {
  const styles = style();

  return (
    <CustomTouchable disabled style={styles.container}>
      <SVG_IMG.TRASH_GRAY />
      <CustomText style={styles.text}>삭제하기</CustomText>
    </CustomTouchable>
  );
});

export default DeleteBar;
