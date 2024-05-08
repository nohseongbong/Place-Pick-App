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
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
});

export default shadowStyle;
