import {StyleSheet} from 'react-native';

const style = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      zIndex: 100000000,
      top: 0,
    },
    icon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default style;
