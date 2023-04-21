import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';

const style = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: palette.BACKGROUND,
    },
    text: {
      color: palette.PRIMARY,
    },
  });
};

export default style;
