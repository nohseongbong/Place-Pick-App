import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const statuses = await requestMultiple([
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ]);
    const result = Platform.select({
      ios: statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
      android: statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
    });
    console.log(Platform.OS === 'ios' ? 'ios' : 'android', ' : ', result);
    switch (result) {
      case 'granted':
        return true;
      case 'limited':
        return true;
      default:
        return false;
        break;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
