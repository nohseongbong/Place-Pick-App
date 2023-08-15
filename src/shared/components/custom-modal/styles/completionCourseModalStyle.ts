import {StyleSheet} from 'react-native';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {fontWt, palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrap: {
      width: '90%',
      maxWidth: wt(450),
      height: ht(180),
      borderRadius: 18,
      backgroundColor: palette.BACKGROUND,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    text: {
      fontSize: fs(16),
      color: palette.TEXT,
      fontFamily: fontWt.SemiBold,
      marginTop: ht(25),
    },
    btn_wrap: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '95%',
    },
    btn: {
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      width: '47%',
      height: ht(46),
      backgroundColor: palette.INNER_BACKGOUND,
    },
    btn_primary: {
      backgroundColor: palette.PRIMARY,
    },
    btn_text: {
      fontSize: fs(13),
      color: palette.SUB_TEXT,
      fontFamily: fontWt.SemiBold,
    },
    btn_text_primary: {
      color: palette.PRIMARY_TEXT,
    },
  });
};

export default style;
