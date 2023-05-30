import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/google/api';
import {RegionType} from '../types/RegionType';
import {initLocation} from '../constants/initLocation';
import {MarKerType} from '../../../shared/types/place/markerType';

const rank = ['park', 'bar', 'restaurant', 'store', 'cafe', 'point_of_interest'];

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
    const filteredList = data.filter((place: any) => rank.includes(this._categoryType(place.types)));
    const mappedList = data.map((place: any) => ({
      location: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      name: place.name,
      place_id: place.place_id,
      category: this._categoryType(place.types),
    }));
    return mappedList;
  };

  private _categoryType(types: any) {
    for (let type of rank) {
      if (types.includes(type)) {
        return type;
      }
    }
    return 'point_of_interest';
  }
}

export const homeStore = new HomeStore();
