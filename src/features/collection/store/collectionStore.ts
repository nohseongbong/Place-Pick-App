import {makeAutoObservable} from 'mobx';
import {showCourseRemoveToast} from '../../../lib/toast/showToast';

class CollectionStore {
  isEdit: boolean = false;
  isDeleteModal: boolean = false;
  selectedList: any[] = [];

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

  deleteSelectCourse = (id: number) => {
    this.selectedList = this.selectedList.filter(x => {
      return x.id !== id;
    });
  };

  deleteCollectionCourse = () => {
    showCourseRemoveToast();
    this.isDeleteModal = false;
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
