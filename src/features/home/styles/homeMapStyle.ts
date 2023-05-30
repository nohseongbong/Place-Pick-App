import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

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
      width: wt(100),
      height: ht(35),
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: ht(60),
      zIndex: 1000,
      ...getPlatformStyles,
      backgroundColor: palette.BACKGROUND,
    },
    near_place_btn_text: {
      color: palette.TEXT,
      fontSize: fs(13),
      fontFamily: fontWt.SemiBold,
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
    my_location_btn_wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wt(35),
      height: ht(35),
      borderRadius: 2,
      position: 'absolute',
      right: wt(15),
      top: ht(58),
      zIndex: 1000,
      backgroundColor: palette.BACKGROUND,
      ...getPlatformStyles,
      opacity: 0.66,
    },
    my_location_btn_img: {
      width: wt(19),
      height: ht(19),
    },
  });
};

export default style;
