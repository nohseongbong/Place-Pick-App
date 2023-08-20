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
export interface ModifyCourseReq {
  courseId: number;
  course: {
    name: string;
    courseLocationRequestsList: CreateCourseReqType[];
  };
}

export interface DeleteCourseReq {
  courseIdList: number[];
}
