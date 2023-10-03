import {axiosInstance} from '..';
import {LoginReq} from './types/requestType';
import {LoginRes, UserInfoRes, WithdrawalRes} from './types/responseType';

export class Api {
  login = async ({token, providerType}: LoginReq): Promise<LoginRes> => {
    const {data} = await axiosInstance.post('/auth/social/login', {
      token,
      providerType,
    });
    return data.body.token;
  };
  userInfo = async (): Promise<UserInfoRes> => {
    const {data} = await axiosInstance.post('/auth/info');
    return data.body;
  };

  withdrawal = async (): Promise<WithdrawalRes> => {
    const {data} = await axiosInstance.delete('/auth/withdrawal');
    return data.body;
  };
}
export const authApi = new Api();
