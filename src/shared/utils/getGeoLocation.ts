import Geolocation from '@react-native-community/geolocation';
import {RegionType} from '../../features/home/types/RegionType';

export const getGeoLocation = async (): Promise<RegionType> => {
  let result = {latitude: 37.4979052, longitude: 127.0275777, latitudeDelta: 0.01, longitudeDelta: 0.01};
  try {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        result = {...result, latitude: latitude, longitude: longitude};
      },
      error => {
        console.log(`Geolocation error: ${error.message}`);
      },
    );
  } catch (error) {
    console.log(`Geolocation error: ${error}`);
  }

  return result;
};
