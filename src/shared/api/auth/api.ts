import {axiosInstance} from '..';
import {LoginReq} from './types/requestType';
import {LoginRes} from './types/responseType';

export class Api {
  login = async ({token, providerType}: LoginReq): Promise<LoginRes> => {
    const {data} = await axiosInstance.post('/auth/social/login', {
      token,
      providerType,
    });
    return data.body.token;
  };
}
export const authApi = new Api();
