import {makeAutoObservable, runInAction} from 'mobx';
import {RegionType} from '../../features/home/types/RegionType';
import {initLocation} from '../../features/home/constants/initLocation';

class UserStore {
  userLocation: RegionType = initLocation;

  constructor() {
    makeAutoObservable(this);
  }

  setUserLocation = ({latitude, longitude}: {latitude: number; longitude: number}) => {
    runInAction(() => {
      this.userLocation.latitude = latitude;
      this.userLocation.longitude = longitude;
    });
  };

  get getUserLocation() {
    return this.userLocation;
  }
}

export const userStore = new UserStore();
