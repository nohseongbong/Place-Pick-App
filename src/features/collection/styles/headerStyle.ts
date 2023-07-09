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
      alignItems: 'center',
    },
    title_text: {
      fontSize: fs(20),
      color: palette.TEXT,
      fontFamily: fontWt.SemiBold,
    },
    icon_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: wt(35),
    },
  });
};

export default style;
