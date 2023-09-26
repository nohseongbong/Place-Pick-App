import {makeAutoObservable, runInAction} from 'mobx';
import {spinnerStore} from './spinnerStore';
import {authApi} from '../api/auth/api';
import {LoginReq} from '../api/auth/types/requestType';

class AuthStore {
  accessToken: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  login = async ({token, providerType}: LoginReq) => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await authApi.login({token, providerType});
      console.log(data.token, ': data login');
      runInAction(() => {
        this.accessToken = data.token;
      });
    } catch (error) {
      console.log(error, ':login  error');
    } finally {
      spinnerStore.setIsSpinnerState(false);
    }
  };

  logout = () => {
    this.accessToken = '';
  };
}

export const authStore = new AuthStore();
