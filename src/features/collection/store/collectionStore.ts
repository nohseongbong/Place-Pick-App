import {makeAutoObservable, runInAction} from 'mobx';
import {showCourseRemoveToast} from '../../../lib/toast/showToast';
import {courseApi} from '../../../shared/api/course/api';
import {CourseResType} from '../../../shared/api/course/types/responseType';

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
    showCourseRemoveToast();
    this.isDeleteModal = false;
  };

  fetchCourseList = async () => {
    try {
      const {data} = await courseApi.getCourseList();
      console.log(data, ':CourseList data');
      runInAction(() => {
        this.courseList = data.sort((a, b) => a.courseOrder - b.courseOrder);
      });
    } catch (error) {
      console.log(error, ':CourseList error');
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
