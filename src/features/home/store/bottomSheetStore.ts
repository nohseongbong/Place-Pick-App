import {makeAutoObservable} from 'mobx';
import {FocusedType} from '../constants/BottomSheetFocusedType';

class BottomSheetStore {
  focusedType: FocusedType = FocusedType.DETAIL;

  constructor() {
    makeAutoObservable(this);
  }
  setFocusedType = (type: FocusedType) => {
    this.focusedType = type;
  };
}

export const bottomSheetStore = new BottomSheetStore();
