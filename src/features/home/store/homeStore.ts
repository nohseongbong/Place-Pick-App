import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/google/api';
import {RegionType} from '../types/RegionType';
import {initLocation} from '../constants/initLocation';
import {MarKerType} from '../../../shared/types/place/markerType';
import {GooglePlaceType} from '../../../shared/constants/googlePlaceType';

const rank = [
  GooglePlaceType.PARK,
  GooglePlaceType.BAR,
  GooglePlaceType.RESTAURANT,
  GooglePlaceType.STORE,
  GooglePlaceType.CAFE,
  GooglePlaceType.POINT_OF_INTEREST,
];

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
    return GooglePlaceType.POINT_OF_INTEREST;
  }
}

export const homeStore = new HomeStore();
