import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    map_wrap: {
      width: '100%',
      height: '100%',
    },
    near_place_btn: {
      width: wt(80),
      height: ht(30),
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: ht(60),
      zIndex: 1000,
      backgroundColor: palette.BACKGROUND,
    },
    marker_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    marker_text: {
      color: palette.TEXT,
      fontSize: fs(11),
      fontFamily: fontWt.Bold,
      marginTop: ht(3),
    },
  });
};

export default style;
