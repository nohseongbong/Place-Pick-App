import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
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
