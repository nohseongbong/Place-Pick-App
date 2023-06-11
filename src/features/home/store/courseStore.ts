import {makeAutoObservable, runInAction} from 'mobx';
import {PlaceType} from '../../../shared/types/place/placeType';
import {ConnectType} from '../types/ConnectType';

class CourseStore {
  courseNumber: number = 1;
  courseList: PlaceType[] = [];
  courseConectList: ConnectType[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  addCourseNumber = () => {
    this.courseNumber = this.courseNumber + 1;
  };

  removeCourseNumber = () => {
    if (this.courseNumber !== 0) {
      this.courseNumber = this.courseNumber - 1;
    }
  };

  setRemoveCourseList = (index: number) => {
    this.courseList = this.courseList.filter((x, idx) => idx !== index);
  };

  setAddCourseList = (place: PlaceType) => {
    // this.courseList.push(place);
    this.courseList = [...this.courseList, place];
    let arr: ConnectType[] = [];
    if (this.courseList.length > 1) {
      this.courseList.map((item, index) => {
        if (this.courseList.length - 1 !== index) {
          const start = item;
          const end = this.courseList[index + 1];
          const connectObj: ConnectType = {
            start: {
              place_id: start.place_id,
              location: start.location,
            },
            end: {
              place_id: end.place_id,
              location: end.location,
            },
          };
          arr.push(connectObj);
          return;
        }
      });
      this.courseConectList = arr;
    }
  };
}

export const courseStore = new CourseStore();
