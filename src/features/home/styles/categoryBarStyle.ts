import {Platform, StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(50),
      backgroundColor: palette.BACKGROUND,
      ...(Platform.OS === 'ios'
        ? {
            shadowColor: '#000000',
            shadowOpacity: 1,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          }
        : {
            elevation: 5,
          }),
    },
    content_container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: wt(20),
      gap: wt(30),
    },
    category_item: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.BACKGROUND,
      flexDirection: 'row',
      borderBottomWidth: 2.5,
      borderColor: palette.BACKGROUND,
    },
    item_text: {
      fontSize: fs(14),
      color: palette.SUB_TEXT,
      marginLeft: wt(5),
    },
  });
};

export default style;
