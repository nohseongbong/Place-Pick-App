import {makeAutoObservable} from 'mobx';

import {ConnectType} from '../../home/types/ConnectType';
import {PlaceType} from '../../../shared/types/place/placeType';

class CollectionDetailStore {
  isCourseNameModal: boolean = false;
  courseName: string = '21312';
  courseList: PlaceType[] = [];
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

  resetCourseDetail = () => {
    this.isCourseNameModal = false;
    this.courseName = '';
  };
}

export const collectionDetailStore = new CollectionDetailStore();
