import axios from 'axios';
import {config as basedConfig} from './config';
import {GOOGLE_PLACE_API_KEY} from '@env';
import {authStore} from '../store/authStore';

export const axiosInstance = axios.create({
  baseURL: `${basedConfig.apiBaseUrl}`,
  withCredentials: true,
});
export const axiosInstanceGoogleApi = axios.create({
  baseURL: `${basedConfig.googlePlaceApiUrl}`,
  withCredentials: true,
  params: {
    key: 'AIzaSyDFjklWm3LLhHz0l56Ws8N3t1zVDr3S7mg',
    // key: GOOGLE_PLACE_API_KEY,
    language: 'ko',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = authStore.accessToken
      ? `Bearer ${authStore.accessToken}`
      : '';

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
