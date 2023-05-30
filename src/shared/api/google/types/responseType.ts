export interface ResType<T> {
  status: number;
  data: T | undefined;
  message: string;
  error: {
    [key: string]: string;
  };
}

export interface GooglePlaceListRes {
  data: any;
}
export interface GooglePlaceDetailRes {
  status: number;
  data: any;
}
export interface GooglePlaceSearchRes {
  data: any;
}
