import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: palette.BACKGROUND,
    },
    text: {
      position: 'absolute',
      color: palette.SUB_TEXT,
      bottom: ht(30),
      fontSize: fs(13),
      fontFamily: fontWt.Medium,
    },
  });
};

export default style;
