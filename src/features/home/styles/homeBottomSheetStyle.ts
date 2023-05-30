import {Platform, StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
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
  });
};

export default style;
