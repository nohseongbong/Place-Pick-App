import {axiosInstance} from '..';
import {formatCategory} from '../../utils/formatCategory';
import {CourseDetailReq, CreateCourseReq, DeleteCourseReq, ModifyCourseReq} from './types/requestType';
import {CourseDetailRes, CourseListRes} from './types/responseType';

export class Api {
  getCourseList = async (): Promise<CourseListRes> => {
    const {data} = await axiosInstance.get('/courses/list');
    const result = data.data.map((course: any) => {
      return {
        ...course,
        locationList: course.locationList.map((e: any) => {
          return {...e, locationCategory: formatCategory({res: e.locationCategory})};
        }),
      };
    });
    return result;
  };
  getCourseDetail = async ({courseId}: CourseDetailReq): Promise<CourseDetailRes> => {
    const {data} = await axiosInstance.get(`/courses/detail/${courseId}`);
    const result = {
      ...data.data,
      locationList: data.data.locationList.map((e: any) => {
        return {...e, category: formatCategory({res: e.category})};
      }),
    };

    return result;
  };
  createCourse = async (course: CreateCourseReq) => {
    await axiosInstance.post('/courses/save', course);
  };
  modifyCourse = async ({courseId, course}: ModifyCourseReq) => {
    await axiosInstance.put(`/courses/${courseId}`, course);
  };
  deleteCourse = async ({courseId}: DeleteCourseReq) => {
    await axiosInstance.delete(`/courses/${courseId}`);
  };
}

export const courseApi = new Api();
