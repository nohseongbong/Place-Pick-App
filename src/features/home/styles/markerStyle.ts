import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
import {ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    test_PR_btn: {
      width: wt(150),
      height: ht(50),
      backgroundColor: palette.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default style;
