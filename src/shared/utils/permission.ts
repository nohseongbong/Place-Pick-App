import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocationPermission = async () => {
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
    return result;
  } catch (error) {
    console.error(error);
    return RESULTS.UNAVAILABLE;
  }
};
