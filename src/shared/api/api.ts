import {axiosInstance, axiosInstanceGoogleApi} from '../../api';
import {GooglePlaceDetailReq, GooglePlaceListReq, LoginReq} from '../types/api/requestType';
import {GooglePlaceDetailRes, GooglePlaceListRes, LoginRes, ResType} from '../types/api/responseType';

export class Api {
  login = ({accessToken}: LoginReq): Promise<ResType<LoginRes>> => axiosInstance.post('/login', {accessToken});
  getGooglePlaceList = ({latitude, longitude}: GooglePlaceListReq): Promise<GooglePlaceListRes> =>
    axiosInstanceGoogleApi.get('/place/nearbysearch/json', {
      params: {
        location: `${latitude},${longitude}`,
        radius: 500,
        type: 'restaurant',
      },
    });
  getGooglePlaceDetail = ({place_id}: GooglePlaceDetailReq): Promise<GooglePlaceDetailRes> =>
    axiosInstanceGoogleApi.get('/place/details/json', {
      params: {
        place_id: place_id,
        fields: 'name,formatted_address,website',
      },
    });
}

export const api = new Api();
