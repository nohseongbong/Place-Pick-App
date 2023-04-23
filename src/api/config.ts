import {TEST_URL_API} from '@env';

class Config {
  apiBaseUrl: string = TEST_URL_API ?? 'http://localhost:3000';
  googlePlaceApiUrl: string = 'https://maps.googleapis.com/maps/api';
}

export const config = new Config();
