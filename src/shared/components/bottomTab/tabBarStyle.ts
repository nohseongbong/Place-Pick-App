import {StyleSheet} from 'react-native';
import {palette} from '../../constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: ht(100),
      alignItems: 'center',
      backgroundColor: colors.BACKGROUND,
      overflow: 'hidden',
      paddingBottom: ht(50),
      paddingTop: ht(10),
      borderTopWidth: 1,
      borderColor: palette.BORDER,
    },
    icon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    write_icon_img: {
      width: wt(23),
      height: ht(23),
    },
    icon_text: {
      fontWeight: '600',
      fontSize: fs(12),
      color: '#000',
      marginTop: ht(10),
    },
  });
};

export default style;
