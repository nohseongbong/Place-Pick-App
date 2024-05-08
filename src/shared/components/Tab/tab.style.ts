import {StyleSheet} from 'react-native';
import {ColorType} from '../../constants/palette';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 24,
  },
  wrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: '100%',
    height: 3,
    marginTop: 12,
    backgroundColor: ColorType.primary.normal,
  },

  // info
  info_container: {
    flexDirection: 'row',
    width: '100%',
  },
  info_icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  info_bar: {
    width: '100%',
    height: 3,
    marginTop: 12,
    backgroundColor: ColorType.basic.body,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});

export default style;
