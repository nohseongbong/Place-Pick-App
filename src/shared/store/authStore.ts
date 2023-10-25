import {makeAutoObservable, runInAction} from 'mobx';
import {spinnerStore} from './spinnerStore';
import {authApi} from '../api/auth/api';
import {LoginReq} from '../api/auth/types/requestType';
import {userStore} from './userStore';
import {removeStorage, setStorage} from '../../lib/storage';

interface LoginProp extends LoginReq {
  action: () => void;
}

class AuthStore {
  accessToken: string = '';
  isLoginModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoginModal = (state: boolean) => {
    this.isLoginModal = state;
  };

  login = async ({token, providerType, action}: LoginProp) => {
    try {
      spinnerStore.setIsSpinnerState(true);
      const data = await authApi.login({token, providerType});
      console.log(data.token, ': data login');
      runInAction(() => {
        this.accessToken = data.token;
      });
      await setStorage('AuthLogin', {token, providerType});
      this.fetchUserInfo();
      action();
    } catch (error) {
      console.log(error, ':login  error');
    } finally {
      spinnerStore.setIsSpinnerState(false);
    }
  };

  fetchUserInfo = async () => {
    if (!authStore.accessToken) {
      return;
    }
    try {
      const data = await authApi.userInfo();
      console.log(data, ': user data');
      userStore.setUserInfo(data.info);
    } catch (error) {
      console.log(error, ' userInfo error');
    }
  };

  logout = async () => {
    this.accessToken = '';
    await removeStorage('AuthLogin');
  };
}

export const authStore = new AuthStore();
