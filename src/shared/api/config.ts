import {PLACE_PICK_API_URL} from '@env';
class Config {
  apiBaseUrl: string = PLACE_PICK_API_URL ?? 'http://localhost:3000';
  googlePlaceApiUrl: string = 'https://maps.googleapis.com/maps/api';
}

export const config = new Config();
