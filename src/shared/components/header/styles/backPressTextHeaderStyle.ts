import {StyleSheet} from 'react-native';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {fontWt, palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(45),
      backgroundColor: palette.BACKGROUND,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back_btn_wrap: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: wt(50),
      height: '100%',
      left: 0,
    },
    text: {
      fontFamily: fontWt.SemiBold,
      fontSize: fs(18),
      color: palette.TEXT,
    },
  });
};

export default style;
