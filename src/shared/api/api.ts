import {axiosInstance, axiosInstanceGoogleApi} from '../../api';
import {GooglePlaceDetailReq, GooglePlaceListReq, GooglePlaceSearchReq, LoginReq} from '../types/api/requestType';
import {
  GooglePlaceDetailRes,
  GooglePlaceListRes,
  GooglePlaceSearchRes,
  LoginRes,
  ResType,
} from '../types/api/responseType';

export class Api {
  login = ({accessToken}: LoginReq): Promise<ResType<LoginRes>> => axiosInstance.post('/login', {accessToken});
  getGooglePlaceList = ({latitude, longitude}: GooglePlaceListReq): Promise<GooglePlaceListRes> =>
    axiosInstanceGoogleApi.get('/place/nearbysearch/json', {
      params: {
        location: `${latitude},${longitude}`,
        radius: 2000,
        language: 'ko',
        type: 'food',
      },
    });
  getGooglePlaceDetail = ({place_id}: GooglePlaceDetailReq): Promise<GooglePlaceDetailRes> =>
    axiosInstanceGoogleApi.get('/place/details/json', {
      params: {
        place_id: place_id,
        fields: 'name,formatted_address,website,url',
      },
    });
  searchGooglePlaces = ({query, type}: GooglePlaceSearchReq): Promise<GooglePlaceSearchRes> =>
    axiosInstanceGoogleApi.get('/place/textsearch/json', {
      params: {
        query: query,
        fields: 'name,formatted_address,rating,user_ratings_total,place_id,url,website',
        type: type,
      },
    });
}

export const api = new Api();
