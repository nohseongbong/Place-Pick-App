import axios from 'axios';
import {config as basedConfig} from './config';

export const axiosInstance = axios.create({
  baseURL: `${basedConfig.apiBaseUrl}/api/v1/`,
  withCredentials: true,
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

axiosInstance.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
