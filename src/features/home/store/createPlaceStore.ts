import {makeAutoObservable} from 'mobx';

class CreatePlaceStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const createPlaceStore = new CreatePlaceStore();
