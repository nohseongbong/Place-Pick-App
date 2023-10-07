import {makeAutoObservable, runInAction} from 'mobx';
import {courseApi} from '../../../shared/api/course/api';
import {courseStore} from '../../home/store/courseStore';
import {spinnerStore} from '../../../shared/store/spinnerStore';

class CourseDetailStore {
  isCourseNameModal: boolean = false;
  courseName: string = '';
  courseId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setIsCourseNameModal = (state: boolean) => {
    this.isCourseNameModal = state;
  };
  setCourseName = (name: string) => {
    this.courseName = name;
  };

  fetchCreateCourse = async (successFnc: () => void) => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await courseApi.createCourse({
        name: this.courseName,
        courseLocationRequestsList: courseStore.courseList.map(
          (item, index) => {
            const {longitude, latitude} = item.location;
            return {
              longitude,
              latitude,
              placeId: item.place_id,
              category: item.category,
              placeName: item.name,
              locationOrder: index + 1,
            };
          },
        ),
      });
      runInAction(() => {
        this.courseId = data;
      });
      successFnc();
    } catch (error) {
      console.log(error, ':fetchCreateCourse  error');
    } finally {
      spinnerStore.setIsSpinnerState(false);
      this.setIsCourseNameModal(false);
    }
  };

  resetCourseDetail = () => {
    this.isCourseNameModal = false;
    this.courseName = '';
  };
}

export const courseDetailStore = new CourseDetailStore();
