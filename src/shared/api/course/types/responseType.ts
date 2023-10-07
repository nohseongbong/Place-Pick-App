import {PlaceCategoryType} from '../../../constants/placeCategoryType';

export interface ResType<T> {
  status: string;
  data: T;
  message: string;
  code: number;
}

export type CourseResType = {
  courseId: number;
  name: string;
  courseOrder: number;
  locationList: {
    name: string;
    locationCategory: PlaceCategoryType;
  }[];
  createdAt: Date;
};
export type CourseDetailResType = {
  category: PlaceCategoryType;
  locationOrder: number;
  placeName: string;
  latitude: number;
  longitude: number;
};

export type CourseListRes = CourseResType[];

export interface CourseDetailRes {
  courseId: number;
  name: string;
  createdAt: Date;
  locationList: CourseDetailResType[];
  latitude: number;
  longitude: number;
}
