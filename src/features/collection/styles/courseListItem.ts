import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      borderRadius: 16,
      backgroundColor: palette.BACKGROUND,
      width: '100%',
      height: ht(130),
      paddingVertical: ht(20),
      paddingHorizontal: wt(20),
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: palette.DISABLED,
    },

    course_title_text: {
      fontSize: fs(16),
      fontFamily: fontWt.SemiBold,
      color: palette.TEXT,
    },
    place_list_wrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wt(5),
      overflow: 'hidden',
    },
    place_item_text: {
      fontSize: fs(13),
      color: palette.TEXT,
    },
    check_wrap: {
      position: 'absolute',
      right: wt(12),
      top: ht(12),
    },
  });
};

export default style;
