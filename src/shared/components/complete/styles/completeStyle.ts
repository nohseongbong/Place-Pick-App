import {StyleSheet} from 'react-native';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {fontWt, palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    complete_course_wrap: {
      width: '90%',
      height: ht(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.PRIMARY,
      borderRadius: 35,
      position: 'absolute',
      bottom: ht(15),
      zIndex: 100,
      left: '5%',
    },
    complete_course_text: {
      color: palette.BACKGROUND,
      fontSize: fs(14),
      fontFamily: fontWt.Medium,
    },
  });
};

export default style;
