import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../../lib/responsiveSize';
import {palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(45),
      backgroundColor: palette.BACKGROUND,
    },
    back_btn_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: wt(50),
      height: '100%',
    },
  });
};

export default style;
