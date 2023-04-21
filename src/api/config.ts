import {TEST_URL_API} from '@env';

class Config {
  apiBaseUrl: string = TEST_URL_API ?? 'http://localhost:3000';
}

export const config = new Config();
