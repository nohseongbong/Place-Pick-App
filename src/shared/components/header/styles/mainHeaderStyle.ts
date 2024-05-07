import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../../lib/responsiveSize';
import {palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(68),
      backgroundColor: palette.BACKGROUND,
      justifyContent: 'center',
    },
    logo_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wt(30),
      height: '100%',
    },
  });
};

export default style;
