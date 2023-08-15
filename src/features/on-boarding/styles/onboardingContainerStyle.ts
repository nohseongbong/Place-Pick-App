import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.BACKGROUND,
      paddingHorizontal: wt(20),
    },
    logo_wrap: {
      width: '100%',
      alignItems: 'flex-start',
      marginVertical: ht(30),
    },
    text: {
      color: palette.TEXT,
      fontSize: fs(20),
      fontFamily: fontWt.SemiBold,
      width: '100%',
    },
    swiper_wrap: {
      position: 'relative',
    },
    swiper_pagination: {
      height: ht(15),
      gap: wt(10),
      bottom: '10%',
    },
    list_wrap: {
      width: '100%',
      alignItems: 'center',
    },
    highlightText: {
      color: palette.PRIMARY,
      fontSize: fs(20),
      fontFamily: fontWt.SemiBold,
    },
    image: {
      marginTop: ht(40),
      width: '90%',
      height: '75%',
    },
  });
};

export default style;
