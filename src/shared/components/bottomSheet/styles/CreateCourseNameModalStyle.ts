import {Platform, StyleSheet} from 'react-native';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {fontWt, palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrap: {
      flex: 1,
      paddingHorizontal: wt(20),
      justifyContent: 'space-around',
      paddingBottom: ht(30),
    },
    wrap_padding: {
      paddingBottom: Platform.OS === 'android' ? ht(70) : ht(85),
    },
    title_text: {
      fontSize: fs(20),
      fontFamily: fontWt.Medium,
      color: palette.TEXT,
    },
    input: {
      width: '100%',
      height: ht(46),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.BORDER,
      alignItems: 'center',
      paddingHorizontal: wt(16),
      paddingVertical: ht(10),
      flexDirection: 'row',
      overflow: 'hidden',
    },
    btn_wrap: {
      width: '100%',
      height: ht(46),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.PRIMARY,
      borderRadius: 35,
    },
    btn_text: {
      color: palette.BACKGROUND,
      fontSize: fs(14),
      fontFamily: fontWt.Bold,
    },
  });
};

export default style;
