import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/api';

class CreatePlaceStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const createPlaceStore = new CreatePlaceStore();
