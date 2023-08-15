import {StyleSheet} from 'react-native';
import {ht} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      gap: ht(16),
      paddingBottom: ht(100),
    },
  });
};

export default style;
