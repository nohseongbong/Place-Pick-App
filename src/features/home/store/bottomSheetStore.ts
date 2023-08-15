import {makeAutoObservable, runInAction} from 'mobx';
import {FocusedType} from '../constants/bottomSheetFocusedType';

class BottomSheetStore {
  focusedType: FocusedType = FocusedType.CREATE;
  bottomSheetIndex: number = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setFocusedType = (type: FocusedType) => {
    this.focusedType = type;
  };
  setBottomSheetIndex = (index: number) => {
    runInAction(() => {
      this.bottomSheetIndex = index;
    });
  };
}

export const bottomSheetStore = new BottomSheetStore();
