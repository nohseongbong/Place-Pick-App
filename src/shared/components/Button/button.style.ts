import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../lib/responsiveSize';

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ht(15),
    borderRadius: 32,
  },
  icon_wrap: {
    width: wt(20),
    height: ht(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
