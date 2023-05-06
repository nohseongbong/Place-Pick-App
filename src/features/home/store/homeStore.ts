import {makeAutoObservable, runInAction} from 'mobx';
import {MarKerType} from '../../../shared/types/place/markerType';
import {api} from '../../../shared/api/api';

const rank = ['park', 'bar', 'store', 'cafe', 'food', 'point_of_interest'];

class HomeStore {
  searchLocation = {
    latitude: 37.4979052,
    longitude: 127.0275777,
  };
  nearPlaceList: MarKerType[] = [];
  isDetailFocused: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsDetailFocused = (state: boolean) => {
    this.isDetailFocused = state;
  };

  setSearchLocation = ({latitude, longitude}: any) => {
    this.searchLocation = {
      latitude: latitude,
      longitude: longitude,
    };
  };

  getFetchNearPlaceList = async (): Promise<MarKerType[]> => {
    try {
      const response = await api.getGooglePlaceList(this.searchLocation);
      const result = response.data.results;
      console.log(result, ' 리스트');
      return this._filterList(result);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

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
    for (let type of types) {
      if (rank.includes(type)) {
        return type;
      }
    }
    // return 'point_of_interest';
  }
}

export const homeStore = new HomeStore();
