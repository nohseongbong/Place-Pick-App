import {axiosInstance} from 'api';
import {LoginReq} from 'shared/types/api/requestType';
import {LoginRes, ResType} from 'shared/types/api/responseType';

export class Api {
  login = ({accessToken}: LoginReq): Promise<ResType<LoginRes>> => axiosInstance.post('/login', {accessToken});
}

export const api = new Api();
