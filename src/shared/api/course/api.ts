import {axiosInstance} from '..';
import {CourseDetailReq, CreateCourseReq} from './types/requestType';
import {CourseDetailRes, CourseListRes, CreateCourseRes, ResType} from './types/responseType';

export class Api {
  getCourseList = async (): Promise<ResType<CourseListRes>> => {
    const {data} = await axiosInstance.get('/courses/list');
    return data;
  };
  getCourseDetail = async ({courseId}: CourseDetailReq): Promise<ResType<CourseDetailRes>> => {
    const {data} = await axiosInstance.get(`/courses/detail/${courseId}`);
    return data;
  };
  createCourse = async (course: CreateCourseReq): Promise<ResType<CreateCourseRes>> => {
    const {data} = await axiosInstance.post('/courses/save', course);
    return data;
  };
}

export const courseApi = new Api();
