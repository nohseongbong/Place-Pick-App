import {makeAutoObservable} from 'mobx';

class ManagementStore {
  isModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsModal = (state: boolean) => {
    this.isModal = state;
  };

  onCloseModal = () => {
    this.setIsModal(false);
  };

  fetchWithdrawal = () => {
    this.setIsModal(false);
  };
}

export const managementStore = new ManagementStore();
