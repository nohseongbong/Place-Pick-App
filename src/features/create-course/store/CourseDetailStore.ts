import {makeAutoObservable, runInAction} from 'mobx';

class CourseDetailStore {
  isCourseNameModal: boolean = false;
  courseName: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setIsCourseNameModal = (state: boolean) => {
    this.isCourseNameModal = state;
  };
  setCourseName = (name: string) => {
    this.courseName = name;
  };
}

export const courseDetailStore = new CourseDetailStore();
