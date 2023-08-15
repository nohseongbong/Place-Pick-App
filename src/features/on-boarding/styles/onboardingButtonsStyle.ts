import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: ht(15),
    },
    button_wrap: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      height: ht(44),
    },
    button_start_wrap: {
      backgroundColor: palette.PRIMARY,
      marginTop: ht(20),
    },
    text: {
      color: palette.PRIMARY,
      fontSize: fs(15),
      fontFamily: fontWt.SemiBold,
    },
    start_text: {
      color: palette.PRIMARY_TEXT,
    },
  });
};

export default style;
