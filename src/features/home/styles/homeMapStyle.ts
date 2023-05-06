import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
import {ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    map_wrap: {
      width: '100%',
      height: '100%',
    },
    near_place_btn: {
      width: wt(80),
      height: ht(30),
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: ht(60),
      zIndex: 1000,
      backgroundColor: palette.BACKGROUND,
    },
  });
};

export default style;
