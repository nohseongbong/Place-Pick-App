import {makeAutoObservable, runInAction} from 'mobx';
import {googleApi} from '../../../shared/api/google/api';
import {PlaceCategoryType} from '../../../shared/constants/placeCategoryType';
import {_categoryType} from '../../../shared/utils/placeCategory';
import {PlaceType} from '../../../shared/types/place/placeType';
import {homeStore} from './homeStore';
import {bottomSheetStore} from './bottomSheetStore';
import {FocusedType} from '../constants/bottomSheetFocusedType';

class PlaceDetailStore {
  isSearchPlaceDetail: boolean = false;

  place_id: string = '';
  name: string = '';
  formatted_address: string = '';
  rating: number = 0;
  user_ratings_total: number = 0;
  url: string = '';
  category: PlaceCategoryType = PlaceCategoryType.BAR;
  location: {
    latitude: number;
    longitude: number;
  } = {
    latitude: 0,
    longitude: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setIsSearchPlaceDetail = (state: boolean) => {
    this.isSearchPlaceDetail = state;
  };

  get getPlaceInfo(): PlaceType {
    return {
      place_id: this.place_id,
      name: this.name,
      formatted_address: this.formatted_address,
      rating: this.rating,
      user_ratings_total: this.user_ratings_total,
      url: this.url,
      category: this.category,
      location: this.location,
    };
  }

  fetchPlaceDetail = async (place_id: string) => {
    try {
      const response = await googleApi.getGooglePlaceDetail({place_id});
      if (response.status !== 200) {
        return;
      }
      const data = response.data.result;
      const location = {latitude: data.geometry.location.lat, longitude: data.geometry.location.lng};
      homeStore.setMapLocation(location);
      homeStore.setSearchLocation(location);
      bottomSheetStore.setFocusedType(FocusedType.DETAIL);
      runInAction(() => {
        Object.assign(this, {
          ...data,
          category: _categoryType(data.types),
          location: location,
        });
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}

export const placeDetailStore = new PlaceDetailStore();
