import {StyleSheet} from 'react-native';
import {palette} from '../../constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  const colors = palette;
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: ht(50),
      alignItems: 'center',
      backgroundColor: colors.BACKGROUND,
      overflow: 'hidden',
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
      marginTop: ht(5),
    },
  });
};

export default style;
