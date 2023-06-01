import {makeAutoObservable} from 'mobx';
import {FocusedType} from '../constants/bottomSheetFocusedType';

class BottomSheetStore {
  focusedType: FocusedType = FocusedType.SEARCH;

  constructor() {
    makeAutoObservable(this);
  }
  setFocusedType = (type: FocusedType) => {
    this.focusedType = type;
  };
}

export const bottomSheetStore = new BottomSheetStore();
