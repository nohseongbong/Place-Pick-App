import {makeAutoObservable, runInAction} from 'mobx';

import {ConnectType} from '../../home/types/ConnectType';
import {CourseType} from '../../../shared/types/place/placeType';
import {courseApi} from '../../../shared/api/course/api';
import {spinnerStore} from '../../../shared/store/spinnerStore';
import {showCourseNameUpdateToast} from '../../../lib/toast/showToast';

type Location = {
  latitude: number;
  longitude: number;
};

class CollectionDetailStore {
  isSearch: boolean = false;
  isCourseNameModal: boolean = false;
  selectedCourse: number = 0;
  courseId: number = 0;
  courseName: string = '';
  courseList: CourseType[] = [];
  courseConectList: ConnectType[] = [];
  location: Location = {
    latitude: 37.4979052,
    longitude: 127.0275777,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setIsSearch = (state: boolean) => {
    this.isSearch = state;
  };

  setIsCourseNameModal = (state: boolean) => {
    this.isCourseNameModal = state;
  };
  setCourseName = (name: string) => {
    this.courseName = name;
  };

  setSelectedCourse = (index: number) => {
    this.selectedCourse = index;
  };

  setRemoveCourseList = (index: number) => {
    this.courseList = this.courseList.filter((x, idx) => idx !== index);
    this.fetchModifyCourseDetail();
  };

  setEditCourseList = (place: any) => {
    this.courseList = this.courseList.map((item, index) => {
      const result = {
        ...place,
        location: {latitude: place.location.lat, longitude: place.location.lng},
      };
      if (this.selectedCourse === index) {
        return result;
      } else {
        return item;
      }
    });
    this.setConnectList();
    this.fetchModifyCourseDetail();
  };

  fetchGetCourseDetail = async (courseId: number) => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await courseApi.getCourseDetail({courseId});
      console.log(data, ': data CourseDetail');
      runInAction(() => {
        this.courseName = data.name;
        this.courseId = data.courseId;

        this.location = {
          latitude: data.latitude,
          longitude: data.longitude,
        };
        this.courseList = data.locationList.map(item => {
          return {
            place_id: item.locationOrder.toString(),
            name: item.placeName,
            locationOrder: item.locationOrder,
            category: item.category,
            location: {
              latitude: item.latitude,
              longitude: item.longitude,
            },
          };
        });
      });
      this.setConnectList();
    } catch (error) {
      console.log(error, ': error CourseDetail');
    } finally {
      spinnerStore.setIsSpinnerState(false);
    }
  };

  fetchModifyCourseDetail = async () => {
    try {
      spinnerStore.setIsSpinnerState(true);

      const course = this.courseList.map((item, index) => {
        return {
          location: item.location,
          placeId: item.place_id,
          category: item.category,
          placeName: item.name,
          locationOrder: index + 1,
        };
      });
      const data = await courseApi.modifyCourse({
        courseId: this.courseId,
        course: {name: this.courseName, courseLocationRequestsList: course},
      });
      showCourseNameUpdateToast();

      console.log(data, ': data CourseUpdate');
    } catch (error) {
      console.log(error, ': error CourseUpdate');
    } finally {
      this.setIsSearch(false);
      spinnerStore.setIsSpinnerState(false);
    }
  };

  resetCourseDetail = () => {
    this.isCourseNameModal = false;
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
