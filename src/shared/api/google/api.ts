import {axiosInstanceGoogleApi} from '..';
import {GooglePlaceDetailReq, GooglePlaceListReq, GooglePlaceSearchReq} from './types/requestType';
import {GooglePlaceDetailRes, GooglePlaceListRes, GooglePlaceSearchRes} from './types/responseType';

export class Api {
  getGooglePlaceList = ({location, category}: GooglePlaceListReq): Promise<GooglePlaceListRes> =>
    axiosInstanceGoogleApi.get('/place/nearbysearch/json', {
      params: {
        location: `${location.latitude},${location.longitude}`,
        radius: 1000,
        language: 'ko',
        type: category,
      },
    });
  getGooglePlaceDetail = ({place_id}: GooglePlaceDetailReq): Promise<GooglePlaceDetailRes> =>
    axiosInstanceGoogleApi.get('/place/details/json', {
      params: {
        place_id: place_id,
        fields: 'name,formatted_address,rating,user_ratings_total,url,place_id,types,geometry',
      },
    });
  searchGooglePlaces = ({query, type}: GooglePlaceSearchReq): Promise<GooglePlaceSearchRes> =>
    axiosInstanceGoogleApi.get('/place/textsearch/json', {
      params: {
        query: query,
        type: type,
        radius: 10000,
      },
    });
}

export const googleApi = new Api();
