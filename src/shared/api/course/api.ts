import {axiosInstance} from '..';
import {CourseDetailReq, CreateCourseReq, DeleteCourseReq, ModifyCourseReq} from './types/requestType';
import {CourseDetailRes, CourseListRes} from './types/responseType';

export class Api {
  getCourseList = async (): Promise<CourseListRes> => {
    const {data} = await axiosInstance.get('/courses/list');

    return data.data;
  };
  getCourseDetail = async ({courseId}: CourseDetailReq): Promise<CourseDetailRes> => {
    const {data} = await axiosInstance.get(`/courses/detail/${courseId}`);

    return data.data;
  };
  createCourse = async (course: CreateCourseReq) => {
    const {data} = await axiosInstance.post('/courses/save', course);
    return data.data;
  };
  modifyCourse = async ({courseId, course}: ModifyCourseReq) => {
    await axiosInstance.put(`/courses/${courseId}`, course);
  };
  deleteCourse = async ({courseIdList}: DeleteCourseReq) => {
    const {data} = await axiosInstance.delete('/courses', {data: {courseIds: courseIdList}});
    return data;
  };
}

export const courseApi = new Api();
