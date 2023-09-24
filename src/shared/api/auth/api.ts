import {axiosInstance} from '..';
import {LoginReq} from './types/requestType';
import {LoginRes, ResType} from './types/responseType';

export class Api {
  login = async ({
    token,
    providerType,
  }: LoginReq): Promise<ResType<LoginRes>> => {
    const {data} = await axiosInstance.post('/auth/social/login', {
      token,
      providerType,
    });
    return data.data;
  };
}
export const authApi = new Api();
