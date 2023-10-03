import {makeAutoObservable} from 'mobx';
import {authApi} from '../../../../shared/api/auth/api';
import {authStore} from '../../../../shared/store/authStore';

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

  fetchWithdrawal = async () => {
    try {
      const data = await authApi.withdrawal();
      console.log(data, ' withdrawal data');
      authStore.logout();
    } catch (error) {
      console.log(error, ' withdrawal error');
    } finally {
      this.setIsModal(false);
    }
  };
}

export const managementStore = new ManagementStore();
