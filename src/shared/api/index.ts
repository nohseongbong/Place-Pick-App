import axios from 'axios';
import {config as basedConfig} from './config';
import {GOOGLE_PLACE_API_KEY} from '@env';

export const axiosInstance = axios.create({
  baseURL: `${basedConfig.apiBaseUrl}/api/v1/`,
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
    config.headers.Authorization = `Bearer ${'accessToken'}`;
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
