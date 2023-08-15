import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../../shared/constants/palette';
import {fs, ht} from '../../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      marginTop: ht(30),
    },
    logout_wrap: {
      width: '100%',
      borderRadius: 25,
      height: ht(46),
      backgroundColor: palette.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content_text: {
      color: palette.PRIMARY_TEXT,
      fontSize: fs(14),
      fontFamily: fontWt.Medium,
    },
    withdrawal_text: {
      color: palette.SUB_TEXT,
      fontSize: fs(15),
      fontFamily: fontWt.SemiBold,
      marginTop: ht(30),
    },
  });
};

export default style;
