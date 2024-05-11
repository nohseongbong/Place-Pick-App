import {StyleSheet} from 'react-native';
import {ColorType} from '../../constants/palette';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 3,
    backgroundColor: ColorType.basic.background,
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 40,
    height: 40,
    backgroundColor: ColorType.basic.background,
    borderRadius: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  tail: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: ColorType.basic.background,
    transform: [{rotate: '180deg'}],
    marginTop: -10,
  },
  select_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  selected_icon_wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_text: {
    position: 'absolute',
  },
});

export default style;
