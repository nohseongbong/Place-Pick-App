import {makeAutoObservable} from 'mobx';

class CollectionStore {
  isEdit: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  setIsEdit = (state: boolean) => {
    this.isEdit = state;
  };
}

export const collectionStore = new CollectionStore();
