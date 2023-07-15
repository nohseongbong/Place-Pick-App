import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      height: ht(50),
      alignItems: 'center',
    },
    title_text: {
      fontSize: fs(18),
      color: palette.TEXT,
      fontFamily: fontWt.SemiBold,
    },
    button_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      height: ht(32),
      paddingHorizontal: wt(13),
      backgroundColor: palette.PRIMARY,
      borderRadius: 30,
      position: 'absolute',
      right: wt(8),
    },
    button_text: {
      fontSize: fs(13),
      color: palette.PRIMARY_TEXT,
      fontFamily: fontWt.SemiBold,
    },
  });
};

export default style;
