import {StyleSheet} from 'react-native';
import {ColorType} from '../../../shared/constants/palette';
import {ht, wt} from '../../../lib/responsiveSize';

const style = StyleSheet.create({
  image_container: {
    width: wt(200),
    height: ht(200),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: ColorType.line.normal,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image_wrap: {
    width: '100%',
    height: '100%',
  },
});
export default style;
