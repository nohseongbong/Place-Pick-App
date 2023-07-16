import {StyleSheet} from 'react-native';
import {fs, ht} from '../../../lib/responsiveSize';
import {fontWt, palette} from '../../../shared/constants/palette';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '90%',
      height: ht(42),
      alignItems: 'center',
      justifyContent: 'center',
      gap: ht(8),
      backgroundColor: palette.DISABLED,
      ...getPlatformStyles,
      borderRadius: 30,
      flexDirection: 'row',
    },
    text: {
      fontSize: fs(13),
      color: palette.BORDER,
      fontFamily: fontWt.SemiBold,
    },
    active_wrap: {
      backgroundColor: palette.PRIMARY,
    },
    active_text: {
      color: palette.PRIMARY_TEXT,
    },
  });
};

export default style;
