import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
import {ht, wt} from '../../../lib/responsiveSize';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: ht(52),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.BACKGROUND,
  },
  search_bar_wrap: {
    width: '100%',
    height: ht(52),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search_text_wrap: {
    width: '100%',
    height: ht(37),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.INNER_BACKGOUND,
    borderRadius: 16,
    paddingHorizontal: wt(10),
  },
  search_input: {
    width: '100%',
    borderWidth: 0,
    paddingHorizontal: wt(20),
  },
  search_btn: {
    position: 'absolute',
    left: wt(10),
  },
});
export default style;
