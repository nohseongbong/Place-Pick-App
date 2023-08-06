import {makeAutoObservable, runInAction} from 'mobx';

import {ConnectType} from '../../home/types/ConnectType';
import {CourseType} from '../../../shared/types/place/placeType';
import {courseApi} from '../../../shared/api/course/api';

class CollectionDetailStore {
  isCourseNameModal: boolean = false;
  courseName: string = '';
  courseList: CourseType[] = [];
  courseConectList: ConnectType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsCourseNameModal = (state: boolean) => {
    this.isCourseNameModal = state;
  };
  setCourseName = (name: string) => {
    this.courseName = name;
  };

  fetchGetCourseDetail = async (courseId: number) => {
    try {
      console.log(courseId, ':courseId');
      const {data} = await courseApi.getCourseDetail({courseId});
      console.log(data, ': data CourseDetail');
      runInAction(() => {
        this.courseName = data.name;
        this.courseList = data.locationList.map(item => {
          return {
            place_id: item.locationOrder.toString(),
            name: item.placeName,
            category: item.category,
            location: {
              latitude: item.ylocation,
              longitude: item.xlocation,
            },
          };
        });
      });
      this.setConnectList();
    } catch (error) {
      console.log(error, ': error CourseDetail');
    }
  };

  resetCourseDetail = () => {
    this.isCourseNameModal = false;
    this.courseName = '';
  };

  private setConnectList = () => {
    if (this.courseList.length > 1) {
      let arr: ConnectType[] = [];
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

export const collectionDetailStore = new CollectionDetailStore();
