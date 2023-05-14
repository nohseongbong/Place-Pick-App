export interface LoginReq {
  accessToken: string | null;
}
export interface GooglePlaceListReq {
  location: {
    latitude: number;
    longitude: number;
  };
  category: string;
}
export interface GooglePlaceDetailReq {
  place_id: string;
}
export interface GooglePlaceSearchReq {
  query: string;
  type?: string;
}
