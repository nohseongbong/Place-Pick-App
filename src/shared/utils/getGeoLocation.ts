import Geolocation from '@react-native-community/geolocation';
import {userStore} from '../store/userStore';

export const getGeoLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      userStore.setUserLocation({latitude, longitude});
    },
    error => {
      console.log(`Geolocation error: ${error.message}`);
    },
  );
};
