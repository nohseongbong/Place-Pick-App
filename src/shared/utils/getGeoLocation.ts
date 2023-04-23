import Geolocation from '@react-native-community/geolocation';

export const getGeoLocation = async () => {
  try {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      error => {
        console.log(`Geolocation error: ${error.message}`);
      },
    );
  } catch (error) {
    console.log(`Geolocation error: ${error}`);
  }
};
