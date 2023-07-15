import {makeAutoObservable} from 'mobx';

class CollectionStore {
  isEdit: boolean = false;
  selectedList: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsEdit = (state: boolean) => {
    this.isEdit = state;
  };

  addSelectCourse = (course: any) => {
    this.selectedList.push(course);
  };

  removeSelectCourse = (index: number) => {
    this.selectedList.splice(index);
  };

  get getIsSelected(): boolean {
    return this.selectedList.length !== 0;
  }

  reset = () => {
    this.isEdit = false;
  };
}

export const collectionStore = new CollectionStore();
