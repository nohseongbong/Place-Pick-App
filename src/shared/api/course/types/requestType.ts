import {DataCategoryType, PlaceCategoryType} from '../../../constants/placeCategoryType';

export interface CourseDetailReq {
  courseId: number;
}

export type CreateCourseReqType = {
  longitude: number;
  latitude: number;
  placeId: string;
  category: PlaceCategoryType | DataCategoryType;
  placeName: string;
  locationOrder: number;
};
export interface CreateCourseReq {
  name: string;
  courseLocationRequestsList: CreateCourseReqType[];
}

export type ModifyCourseReqType = {
  location: {
    longitude: number;
    latitude: number;
  };
  placeId: string;
  category: PlaceCategoryType | DataCategoryType;
  placeName: string;
  locationOrder: number;
};
export interface ModifyCourseReq {
  courseId: number;
  course: {
    name: string;
    courseLocationRequestsList: ModifyCourseReqType[];
  };
}

export interface DeleteCourseReq {
  courseIdList: number[];
}
