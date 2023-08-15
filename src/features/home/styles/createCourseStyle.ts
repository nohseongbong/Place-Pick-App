import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';
import {getPlatformStyles} from '../../../shared/utils/getPlatformStyles';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wt(20),
      paddingVertical: ht(20),
      paddingBottom: ht(200),
    },
    title_wrap: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: ht(18),
    },
    title_text: {
      fontSize: fs(20),
    },
    title_strong_text: {
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
    },
    place_pick_wrap: {
      width: '100%',
      height: ht(130),
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: wt(16),
      paddingVertical: ht(16),
      borderRadius: 16,
      ...getPlatformStyles,
      backgroundColor: palette.BACKGROUND,
      marginVertical: ht(8),
    },
    place_pick_title: {
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    place_pick_title_text: {
      fontSize: fs(18),
      fontFamily: fontWt.Bold,
      marginLeft: wt(8),
      color: palette.TEXT,
    },
    place_pick_search_wrap: {
      width: '100%',
      height: ht(50),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.BORDER,
      alignItems: 'center',
      paddingHorizontal: wt(16),
      paddingVertical: ht(10),
      flexDirection: 'row',
      overflow: 'hidden',
    },
    place_pick_search_text: {
      fontSize: fs(14),
      color: palette.SUB_TEXT,
      fontFamily: fontWt.Regular,
      marginLeft: wt(6),
    },
    select_place_wrap: {
      width: '100%',
      height: ht(62),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wt(16),
      ...getPlatformStyles,
      backgroundColor: palette.BACKGROUND,
      borderRadius: 16,
      marginVertical: ht(8),
    },
    select_place_text: {
      fontSize: fs(16),
      fontFamily: fontWt.Bold,
      color: palette.SUB_TEXT,
      marginLeft: wt(8),
    },
    add_place_wrap: {
      width: '100%',
      height: ht(62),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wt(16),
      backgroundColor: palette.INNER_BACKGOUND,
      borderRadius: 16,
      marginVertical: ht(8),
    },
    add_place_text: {
      fontSize: fs(16),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
      marginLeft: wt(8),
    },
    selected_wrap: {
      width: '100%',
      height: ht(62),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wt(16),
      borderRadius: 16,
      ...getPlatformStyles,
      backgroundColor: palette.BACKGROUND,
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
  });
};

export default style;
