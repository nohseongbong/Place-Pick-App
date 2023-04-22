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
  });
};

export default style;
