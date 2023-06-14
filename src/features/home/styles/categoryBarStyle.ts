import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    scroll: {
      position: 'absolute',
      top: ht(-50),
      zIndex: 100000,
    },
    container: {
      width: '100%',
      height: ht(50),
      paddingHorizontal: wt(10),
      flexDirection: 'row',
    },
    category_item: {
      paddingHorizontal: wt(15),
      height: ht(35),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.BACKGROUND,
      borderRadius: 30,
      marginRight: wt(8),
      ...getPlatformStyles,
    },
    item_text: {
      fontSize: fs(15),
      fontFamily: fontWt.Medium,
      color: palette.TEXT,
    },
  });
};

export default style;
