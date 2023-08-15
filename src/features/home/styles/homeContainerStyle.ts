import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    test_PR_btn: {
      width: wt(150),
      height: ht(50),
      backgroundColor: palette.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    },
    complete_course_wrap: {
      paddingHorizontal: wt(23),
      paddingVertical: ht(12),
      alignItems: 'center',
      backgroundColor: palette.PRIMARY,
      borderRadius: 35,
      position: 'absolute',
      bottom: ht(15),
      zIndex: 100,
    },
    complete_course_text: {
      color: palette.BACKGROUND,
      fontSize: fs(14),
      fontFamily: fontWt.Medium,
    },
  });
};

export default style;
