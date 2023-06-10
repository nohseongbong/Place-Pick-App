import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {ht, wt} from '../../responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: wt(15),
      paddingVertical: ht(15),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.PRIMARY,
      borderRadius: 16,
    },
    text: {
      color: palette.BACKGROUND,
      fontFamily: fontWt.Bold,
    },
    remove_toast: {
      backgroundColor: palette.PRIMARY_BLACK,
    },
  });
};

export default style;
