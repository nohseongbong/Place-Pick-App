import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
import {wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wt(20),
      backgroundColor: palette.BACKGROUND,
    },
  });
};

export default style;
