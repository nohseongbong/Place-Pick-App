import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/google/api';
import {RegionType} from '../types/RegionType';
import {initLocation} from '../constants/initLocation';
import {MarKerType} from '../../../shared/types/place/markerType';
import {_categoryType} from '../../../shared/utils/placeCategory';

class HomeStore {
  mapLocation: RegionType = initLocation;

  searchLocation = {
    latitude: 37.4979052,
    longitude: 127.0275777,
  };

  category: string = 'restaurant';

  constructor() {
    makeAutoObservable(this);
  }

  setMapLocation = ({latitude, longitude}: {latitude: number; longitude: number}) => {
    this.mapLocation.latitude = latitude;
    this.mapLocation.longitude = longitude;
  };

  setSearchLocation = ({latitude, longitude}: any) => {
    this.searchLocation = {
      latitude: latitude,
      longitude: longitude,
    };
  };

  getFetchNearPlaceList = async (): Promise<MarKerType[]> => {
    try {
      const response = await api.getGooglePlaceList({location: this.searchLocation, category: this.category});
      const result = response.data.results;
      return this._filterList(result);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  get getMapLocation() {
    return this.mapLocation;
  }

  private _filterList = (data: any): MarKerType[] | [] => {
    if (!data) {
      return [];
    }
    const mappedList = data.map((place: any) => ({
      location: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      name: place.name,
      place_id: place.place_id,
      category: _categoryType(place.types),
    }));
    return mappedList;
  };
}

export const homeStore = new HomeStore();
