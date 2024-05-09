import {StyleSheet} from 'react-native';
import {ht, wt} from '../../../lib/responsiveSize';
import {ColorType} from '../../constants/palette';

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
  kakao_wrap: {
    backgroundColor: '#FFDE00',
    width: '100%',
  },
  kakao_map_wrap: {
    borderWidth: 1,
    borderColor: ColorType.line.normal,
    backgroundColor: ColorType.basic.background,
    paddingHorizontal: wt(14),
    borderRadius: wt(12),
  },
});

export default style;
