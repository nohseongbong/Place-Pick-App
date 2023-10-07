import {makeAutoObservable} from 'mobx';
import {RegionType} from '../../features/home/types/RegionType';
import {initLocation} from '../../features/home/constants/initLocation';
import {User} from '../types/user/userType';

class UserStore {
  userLocation: RegionType = initLocation;
  email: string = '';
  name: string = '';
  profileImage: string = '';
  providerType: 'GOOGLE' | 'APPLE' | '' = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    this.userLocation.latitude = latitude;
    this.userLocation.longitude = longitude;
  };

  setUserInfo = (userInfo: User) => {
    Object.assign(this, userInfo);
  };

  get getUserLocation() {
    return this.userLocation;
  }
}

export const userStore = new UserStore();
