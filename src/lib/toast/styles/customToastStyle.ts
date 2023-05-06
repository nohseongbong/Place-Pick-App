import {StyleSheet} from 'react-native';
import {palette} from '../../../shared/constants/palette';
import {ht, wt} from '../../responsiveSize';

const style = () => {
  return StyleSheet.create({
    container: {
      width: wt(150),
      height: ht(60),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF78EF',
      borderRadius: 10,
    },
    text: {
      color: '#fff',
    },
  });
};

export default style;
