import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: ht(52),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.BACKGROUND,
    },
    search_bar_wrap: {
      width: '100%',
      height: ht(52),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    search_text_wrap: {
      width: '100%',
      height: ht(37),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: palette.INNER_BACKGOUND,
      borderRadius: 10,
      paddingHorizontal: wt(10),
    },
    search_input: {
      width: '100%',
      borderWidth: 0,
      paddingHorizontal: wt(20),
    },
    search_btn: {
      position: 'absolute',
      left: wt(10),
    },
    search_remove_btn: {
      position: 'absolute',
      right: wt(10),
    },
    close_btn: {
      width: wt(35),
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    close_text: {
      fontSize: fs(12),
    },
    tab_wrap: {
      width: '100%',
      height: ht(45),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tab: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#ff78ef',
    },
    tab_text: {
      color: palette.BORDER,
      fontSize: fs(14),
      fontFamily: fontWt.Medium,
    },
    active_tab: {
      borderBottomWidth: 2,
    },
    active_tab_text: {
      color: palette.PRIMARY,
    },
    list_wrap: {
      width: '100%',
    },
    item: {
      paddingHorizontal: wt(20),
      width: '100%',
      height: ht(80),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    item_img_wrap: {
      width: '10%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item_info_wrap: {
      width: '90%',
      height: '100%',
      justifyContent: 'center',
      paddingLeft: wt(15),
    },
    item_name: {
      fontSize: fs(16),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
    },
    item_adress: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: ht(5),
    },
    item_rating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    item_text: {
      color: palette.SUB_TEXT,
      fontSize: fs(12),
    },
    item_rating_text: {
      marginHorizontal: wt(5),
      color: palette.SUB_TEXT,
      fontSize: fs(12),
    },
    not_search_wrap: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    not_search_text: {
      color: palette.SUB_TEXT,
      fontSize: fs(17),
    },
  });
};

export default style;
