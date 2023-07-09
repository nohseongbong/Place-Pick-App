import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: ht(44),
      alignItems: 'flex-end',
      marginBottom: ht(15),
    },
    title_text: {
      fontSize: fs(15),
      color: palette.SUB_TEXT,
      fontFamily: fontWt.SemiBold,
    },
    edit_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wt(35),
    },
    edit_text: {
      fontSize: fs(15),
      color: palette.TEXT,
      fontFamily: fontWt.SemiBold,
    },
  });
};

export default style;
