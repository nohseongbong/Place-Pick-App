import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../constants/palette';
import {fs, ht, wt} from '../../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    container: {
      borderRadius: 16,
      ...getPlatformStyles,
      backgroundColor: palette.BACKGROUND,
      overflow: 'hidden',
    },
    selected_wrap: {
      width: '100%',
      height: ht(62),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wt(16),
    },
    selected_icon_wrap: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selected_icon_text: {
      fontSize: fs(11),
      color: palette.BACKGROUND,
      fontFamily: fontWt.Bold,
      position: 'absolute',
    },
    selected_text: {
      fontSize: fs(16),
      width: '76%',
    },
    more_wrap: {
      width: '10%',
      height: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    connect_wrap: {
      width: '100%',
      height: ht(90),
      alignItems: 'center',
      flexDirection: 'row',
      overflow: 'hidden',
      paddingLeft: wt(20),
    },
    connect_btn_wrap: {
      width: wt(158),
      height: ht(40),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: palette.BORDER,
      borderRadius: 8,
      marginLeft: wt(30),
    },
    connect_btn_text: {
      fontSize: fs(13),
      color: palette.TEXT,
      marginLeft: wt(5),
    },
    more_content_wrap: {
      height: ht(62),
      backgroundColor: palette.INNER_BACKGOUND,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: wt(16),
      borderBottomEndRadius: 16,
    },
    more_content_btn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wt(10),
      paddingHorizontal: wt(10),
      height: '100%',
    },
    more_content_btn_text: {
      fontSize: fs(16),
      color: palette.SUB_TEXT,
    },
  });
};

export default style;
