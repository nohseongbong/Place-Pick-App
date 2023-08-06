import {PlaceCategoryType} from '../../../constants/placeCategoryType';

export interface CourseDetailReq {
  courseId: number;
}

export type CreateCourseReqType = {
  longitude: number;
  latitude: number;
  placeId: string;
  category: PlaceCategoryType;
  placeName: string;
  locationOrder: number;
};
export interface CreateCourseReq {
  name: string;
  courseLocationRequestsList: CreateCourseReqType[];
}
