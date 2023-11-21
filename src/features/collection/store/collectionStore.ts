import {makeAutoObservable, runInAction} from 'mobx';
import {showCourseRemoveToast} from '../../../lib/toast/showToast';
import {courseApi} from '../../../shared/api/course/api';
import {CourseResType} from '../../../shared/api/course/types/responseType';
import {spinnerStore} from '../../../shared/store/spinnerStore';

class CollectionStore {
  isEdit: boolean = false;
  isDeleteModal: boolean = false;
  courseList: CourseResType[] = [];
  selectedList: CourseResType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsEdit = (state: boolean) => {
    this.isEdit = state;
    if (!state) {
      this.reset();
    }
  };
  setIsDeleteModal = (state: boolean) => {
    this.isDeleteModal = state;
  };

  addSelectCourse = (course: any) => {
    this.selectedList.push(course);
  };

  deleteSelectCourse = (courseId: number) => {
    this.selectedList = this.selectedList.filter(x => {
      return x.courseId !== courseId;
    });
  };

  deleteCollectionCourse = () => {
    this.fetchCourseDelete();
  };

  fetchCourseList = async () => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await courseApi.getCourseList();
      console.log(data, ':CourseList data');
      runInAction(() => {
        this.courseList = data
          .sort((a, b) => a.courseOrder - b.courseOrder)
          .reverse();
      });
    } catch (error) {
      console.log(error, ':CourseList error');
    } finally {
      spinnerStore.setIsSpinnerState(false);
    }
  };

  fetchCourseDelete = async () => {
    try {
      const req = this.selectedList.map(item => {
        return item.courseId;
      });
      const data = await courseApi.deleteCourse({courseIdList: req});
      console.log(data, ': CourseDelete Api');
      showCourseRemoveToast();
      this.fetchCourseList();
      runInAction(() => {
        this.isDeleteModal = false;
      });
    } catch (error) {
      console.log(error, ': CourseDelete Api error');
    }
  };

  get getIsSelected(): boolean {
    return this.selectedList.length !== 0;
  }

  reset = () => {
    this.isEdit = false;
    this.isDeleteModal = false;
    this.selectedList = [];
  };
}

export const collectionStore = new CollectionStore();
