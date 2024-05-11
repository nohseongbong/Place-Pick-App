import {Platform, StyleSheet} from 'react-native';

const shadowStyle = StyleSheet.create({
  shdow:
    Platform.OS === 'android'
      ? {
          elevation: 24,
        }
      : {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
  marker:
    Platform.OS === 'android'
      ? {
          elevation: 5,
        }
      : {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
});

export default shadowStyle;
