import {StyleSheet} from 'react-native';
import {palette} from '../../../../shared/constants/palette';
import {ht, wt} from '../../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wt(20),
      paddingBottom: ht(25),
      paddingTop: ht(30),
      backgroundColor: palette.BACKGROUND,
    },
  });
};

export default style;
