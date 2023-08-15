import axios from 'axios';
import {config as basedConfig} from './config';
import {GOOGLE_PLACE_API_KEY, TEST_ACCESS_TOKEN} from '@env';

export const axiosInstance = axios.create({
  baseURL: `${basedConfig.apiBaseUrl}`,
  withCredentials: true,
});
export const axiosInstanceGoogleApi = axios.create({
  baseURL: `${basedConfig.googlePlaceApiUrl}`,
  withCredentials: true,
  params: {
    key: GOOGLE_PLACE_API_KEY,
    language: 'ko',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${TEST_ACCESS_TOKEN}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstanceGoogleApi.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
