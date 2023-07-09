import {StyleSheet} from 'react-native';
import {fs, ht} from '../../../lib/responsiveSize';
import {fontWt, palette} from '../../../shared/constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(70),
      alignItems: 'center',
      justifyContent: 'center',
      gap: ht(8),
    },
    text: {
      fontSize: fs(13),
      color: palette.BORDER,
      fontFamily: fontWt.SemiBold,
    },
  });
};

export default style;
