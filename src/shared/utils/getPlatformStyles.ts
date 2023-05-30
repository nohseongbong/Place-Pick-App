import {Platform, StyleSheet} from 'react-native';

export const getPlatformStyles = {
  ...(Platform.OS === 'ios'
    ? {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      }
    : {
        elevation: 2,
      }),
};
