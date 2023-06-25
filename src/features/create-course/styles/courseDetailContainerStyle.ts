import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: palette.BACKGROUND,
      paddingHorizontal: wt(20),
      paddingBottom: ht(70),
    },
    title_text: {
      fontSize: fs(24),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
      marginVertical: ht(16),
    },
    course_info_wrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: ht(60),
      marginVertical: ht(20),
    },
    course_title_text: {
      fontSize: fs(14),
      fontFamily: fontWt.Bold,
      color: palette.SUB_TEXT,
    },
    course_text: {
      fontSize: fs(18),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
    },
    course_info: {
      flex: 1,
      height: '100%',
      justifyContent: 'space-between',
    },
    course_list_title_text: {
      fontSize: fs(20),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
      marginVertical: ht(10),
    },
    course_list_wrap: {
      width: '100%',
      paddingVertical: ht(10),
      paddingHorizontal: wt(5),
    },
  });
};

export default style;
