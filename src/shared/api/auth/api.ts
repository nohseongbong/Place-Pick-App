import {axiosInstance} from '..';
import {LoginRes, ResType} from './types/responseType';

export class Api {
  login = (): Promise<ResType<LoginRes>> => axiosInstance.post('/login');
}

export const api = new Api();
