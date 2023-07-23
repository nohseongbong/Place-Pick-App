import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flex: 1,
      paddingHorizontal: wt(20),
      paddingBottom: ht(25),
      paddingTop: ht(15),
    },
    title: {
      fontSize: fs(18),
      fontFamily: fontWt.SemiBold,
      color: palette.TEXT,
    },
    login_btn_wrap: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: ht(12),
    },
    btn: {
      width: '100%',
      height: ht(46),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: palette.PRIMARY_BLACK,
    },
    apple_btn: {
      backgroundColor: palette.PRIMARY_BLACK,
    },
    btn_text: {
      fontSize: fs(15),
      fontFamily: fontWt.Medium,
      color: palette.TEXT,
      marginLeft: ht(6),
    },
    apple_text: {
      color: palette.PRIMARY_TEXT,
    },
  });
};

export default style;
