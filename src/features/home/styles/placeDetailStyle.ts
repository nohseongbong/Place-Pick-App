import {StyleSheet} from 'react-native';
import {fontWt, palette} from '../../../shared/constants/palette';
import {fs, ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: wt(20),
      backgroundColor: palette.BACKGROUND,
    },
    place_info_container: {
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    place_info_wrap: {
      width: '76%',
      height: '100%',
      marginLeft: wt(12),
      overflow: 'hidden',
    },
    place_info_name_text: {
      fontSize: fs(18),
      fontFamily: fontWt.Bold,
      color: palette.TEXT,
    },
    place_info_address_text: {
      fontSize: fs(14),
      color: palette.TEXT,
      marginTop: ht(8),
      marginBottom: ht(4),
    },
    place_info_rating_wrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wt(6),
    },
    place_info_rating_text: {
      fontSize: fs(14),
      color: palette.TEXT,
    },
    close_wrap: {
      width: wt(30),
      height: ht(30),
      alignItems: 'center',
      justifyContent: 'center',
    },
    btns_wrap: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: ht(23),
      justifyContent: 'space-around',
    },
    btn_wrap: {
      width: '48%',
      maxWidth: wt(250),
      height: ht(36),
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.INNER_BACKGOUND,
    },
    btn_text: {
      fontSize: fs(14),
      color: palette.TEXT,
      fontFamily: fontWt.SemiBold,
    },
  });
};

export default style;
