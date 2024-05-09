import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../lib/responsiveSize';
import {ColorType} from '../../constants/palette';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderColor: ColorType.line.normal,
    backgroundColor: ColorType.basic.background,
    paddingHorizontal: wt(4),
    paddingVertical: ht(4),
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  text: {
    paddingRight: wt(20),
  },
  text_container: {
    paddingHorizontal: wt(16),
    paddingVertical: ht(8),
  },
});

export default style;
