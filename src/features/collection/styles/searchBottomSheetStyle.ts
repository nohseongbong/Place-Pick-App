import {Platform, StyleSheet} from 'react-native';
import {ht, wt} from '../../../lib/responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom_sheet_shadow:
      Platform.OS === 'android'
        ? {
            elevation: 24,
          }
        : {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: -4},
            shadowOpacity: 0.2,
          },
    handler_wrap: {
      width: '100%',
      height: ht(40),
      alignItems: 'center',
      paddingTop: ht(10),
    },
    handler: {
      width: wt(30),
      height: ht(3),
      backgroundColor: 'black',
      borderRadius: 20,
    },
  });
};

export default style;
