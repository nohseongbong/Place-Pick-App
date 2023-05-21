import {makeAutoObservable} from 'mobx';

type FocusedType = 'detail' | 'create';

class BottomSheetStore {
  focusedType: FocusedType = 'detail';

  constructor() {
    makeAutoObservable(this);
  }
  setFocusedType = (type: FocusedType) => {
    this.focusedType = type;
  };
}

export const bottomSheetStore = new BottomSheetStore();
