import {User} from '../user/userType';

export interface ResType<T> {
  status: number;
  data: T | undefined;
  message: string;
  error: {
    [key: string]: string;
  };
}

export interface LoginRes {
  data: User;
}
export interface GooglePlaceListRes {
  data: any;
}
export interface GooglePlaceDetailRes {
  data: any;
}
export interface GooglePlaceSearchRes {
  data: any;
}
