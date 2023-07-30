import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../../shared/constants/palette';
import {fs, ht, wt} from '../../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wt(20),
      paddingBottom: ht(25),
      paddingTop: ht(15),
      backgroundColor: palette.BACKGROUND,
    },
    btn_wrap: {
      width: '100%',
      borderBottomWidth: 0.5,
      borderColor: palette.BORDER,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: ht(80),
    },
    title: {
      fontSize: fs(17),
      fontFamily: fontWt.SemiBold,
      color: palette.TEXT,
    },
  });
};

export default style;
