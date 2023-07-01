import React from 'react';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import style from './styles/BottomSheetBackGroundStyle';

interface Props {
  onPress: () => void;
}

const BottomSheetBackGround = observer(({onPress}: Props) => {
  const styles = style();

  return <CustomTouchable activeOpacity={0.4} onPress={onPress} style={styles.container} />;
});

export default BottomSheetBackGround;
