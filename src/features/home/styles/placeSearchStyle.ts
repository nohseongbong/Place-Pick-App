import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wt(20),
      backgroundColor: palette.BACKGROUND,
    },
    search_bar_wrap: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    search_text_wrap: {
      width: '88%',
      height: ht(37),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: palette.INNER_BACKGOUND,
      borderRadius: 32,
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
    search_remove_btn: {
      position: 'absolute',
      right: wt(10),
    },
    close_btn: {
      width: wt(35),
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    close_text: {
      fontSize: fs(12),
    },
  });
};

export default style;
