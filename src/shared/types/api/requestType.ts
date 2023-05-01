export interface LoginReq {
  accessToken: string | null;
}
export interface GooglePlaceListReq {
  latitude: number;
  longitude: number;
}
export interface GooglePlaceDetailReq {
  place_id: string;
}
export interface GooglePlaceSearchReq {
  query: string;
  type?: string;
}
