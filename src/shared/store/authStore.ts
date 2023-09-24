import {makeAutoObservable, runInAction} from 'mobx';
import {spinnerStore} from './spinnerStore';
import {authApi} from '../api/auth/api';
import {LoginReq} from '../api/auth/types/requestType';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  login = async ({token, providerType}: LoginReq) => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await authApi.login({token, providerType});
      console.log(data, ': data login');
      // runInAction(() => {
      //   this.courseId = data;
      // });
    } catch (error) {
      console.log(error, ':login  error');
    } finally {
      spinnerStore.setIsSpinnerState(false);
    }
  };
}

export const authStore = new AuthStore();
