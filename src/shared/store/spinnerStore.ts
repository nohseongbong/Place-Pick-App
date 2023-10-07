import {makeAutoObservable, runInAction} from 'mobx';

class SpinnerStore {
  isState: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsSpinnerState = (state: boolean) => {
    runInAction(() => {
      this.isState = state;
    });
  };
}

export const spinnerStore = new SpinnerStore();
