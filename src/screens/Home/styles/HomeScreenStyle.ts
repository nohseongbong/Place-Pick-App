import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wt(20),
    backgroundColor: palette.BACKGROUND,
  },
});

export default style;
