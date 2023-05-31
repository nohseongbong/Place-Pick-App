import {makeAutoObservable, runInAction} from 'mobx';
import CoursePlaceModel from './coursePlaceModel';

class CourseStore {
  courseNumber: number = 1;
  courseList: CoursePlaceModel[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addCourseNumber = () => {
    this.courseNumber = this.courseNumber + 1;
  };
}

export const courseStore = new CourseStore();
