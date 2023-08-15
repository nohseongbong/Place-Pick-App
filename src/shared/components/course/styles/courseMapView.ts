import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(185),
      borderRadius: 20,
      overflow: 'hidden',
    },
    map_wrap: {
      width: '100%',
      height: '100%',
    },
  });
};

export default style;
