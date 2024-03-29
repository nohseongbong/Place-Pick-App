import {makeAutoObservable, runInAction} from 'mobx';

import {PlaceCategoryType} from './../../../shared/constants/placeCategoryType';
import {RegionType} from '../types/RegionType';
import {initLocation} from '../constants/initLocation';
import {_categoryType} from '../../../shared/utils/placeCategory';
import {googleApi} from './../../../shared/api/google/api';
import {MarKerType} from '../../../shared/types/place/markerType';

class HomeStore {
  mapLocation: RegionType = initLocation;
  isNearPlace: boolean = true;
  category: string = PlaceCategoryType.FOOD;
  placeList: MarKerType[] = [];

  searchLocation = {
    latitude: 37.4979052,
    longitude: 127.0275777,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setIsNearPlace = (state: boolean) => {
    this.isNearPlace = state;
  };

  setMapLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    this.mapLocation.latitude = latitude;
    this.mapLocation.longitude = longitude;
  };

  setSearchLocation = ({latitude, longitude}: any) => {
    this.searchLocation = {
      latitude: latitude,
      longitude: longitude,
    };
  };

  setCategory = (category: string) => {
    this.category = category;
  };

  getFetchNearPlaceList = async () => {
    try {
      const response = await googleApi.getGooglePlaceList({
        location: this.searchLocation,
        category: this.category,
      });
      const result = response.data.results;
      runInAction(() => {
        this.placeList = this._filterList(result);
      });
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
