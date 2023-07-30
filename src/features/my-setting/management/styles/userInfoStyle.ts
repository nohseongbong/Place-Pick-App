import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../../shared/constants/palette';
import {fs, ht, wt} from '../../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontFamily: fontWt.SemiBold,
      color: palette.TEXT,
      fontSize: fs(16),
      marginBottom: ht(25),
    },
    content_wrap: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: ht(60),
      borderBottomWidth: 0.5,
      borderColor: palette.BORDER,
    },
    content_text: {
      color: palette.TEXT,
      fontSize: fs(14),
    },
    social_wrap: {
      flexDirection: 'row',
      gap: wt(7),
      alignItems: 'center',
    },
  });
};

export default style;
