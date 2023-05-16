import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/api';

class PlaceDetailStore {
  isDetailFocused: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setIsDetailFocused = (state: boolean) => {
    this.isDetailFocused = state;
  };

  fetchPlaceDetail = async (place_id: string) => {
    try {
      const response = await api.getGooglePlaceDetail({place_id});
      if (response.status !== 200) {
        return;
      }
      const result = response.data.result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}

export const placeDetailStore = new PlaceDetailStore();
