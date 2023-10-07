import {StyleSheet} from 'react-native';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {fontWt, palette} from '../../../constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(185),
      borderRadius: 20,
      overflow: 'hidden',
    },
    map_wrap: {
      width: '100%',
      height: '100%',
    },
    marker_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    marker_text: {
      color: palette.TEXT,
      fontSize: fs(9),
      fontFamily: fontWt.Bold,
      marginTop: ht(3),
      width: wt(90),
      textAlign: 'center',
    },
    marker_num: {
      color: palette.PRIMARY_TEXT,
      fontSize: fs(11),
      fontFamily: fontWt.Bold,
      marginTop: ht(3),
      width: wt(70),
      textAlign: 'center',
      position: 'absolute',
    },
  });
};

export default style;
