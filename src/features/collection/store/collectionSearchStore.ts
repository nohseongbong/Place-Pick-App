import {makeAutoObservable, runInAction} from 'mobx';
import {PlaceType} from '../../../shared/types/place/placeType';
import {googleApi} from '../../../shared/api/google/api';
import {debounce} from 'lodash';
import {_categoryType} from '../../../shared/utils/placeCategory';
import {PlaceCategoryType} from '../../../shared/constants/placeCategoryType';
import {searchTabType} from '../../home/constants/searchTabType';

class CollectionSearchStore {
  searchText: string = '';
  searchList: PlaceType[] = [];
  originSearchList: PlaceType[] = [];
  activeTab: string = searchTabType.ALL;
  isFocusSearch: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab = (type: string) => {
    this.activeTab = type;
    this.fliterTabList();
  };

  setIsFocusSearch = (state: boolean) => {
    this.isFocusSearch = state;
  };

  setSearchText = (text: string) => {
    this.searchText = text;
    if (this.searchText) {
      this.debouncedSearch();
    }
  };

  resetSearch = () => {
    this.searchText = '';
    this.searchList = [];
    this.originSearchList = [];
    this.activeTab = searchTabType.ALL;
    this.isFocusSearch = false;
  };

  fetchGoogleSearchPlace = async () => {
    await googleApi
      .searchGooglePlaces({query: this.searchText})
      .then(response => {
        const result = response.data;
        if (!result || !result.results) {
          return;
        }
        this.filterList(result.results);
      })
      .catch(error => {
        console.log(error, ' :  검색 에러');
      });
  };

  private filterList = (list: any) => {
    let formatList = list.map((item: any) => {
      return {
        place_id: item.place_id,
        name: item.name,
        formatted_address: item.formatted_address,
        rating: item.rating,
        user_ratings_total: item.user_ratings_total,
        category: _categoryType(item.types),
        location: item.geometry.location,
      };
    });
    runInAction(() => {
      this.searchList = formatList;
      this.originSearchList = formatList;
    });
  };

  private fliterTabList = () => {
    if (this.originSearchList.length === 0) {
      return;
    }
    const list = this.originSearchList.filter(x => {
      switch (this.activeTab) {
        case searchTabType.CAFE:
          return x.category === PlaceCategoryType.CAFE;
        case searchTabType.POINT_OF_INTEREST:
          return x.category === PlaceCategoryType.POINT_OF_INTEREST;
        case searchTabType.RESTAURANT:
          return x.category === PlaceCategoryType.FOOD;
        default:
          return true;
      }
    });
    runInAction(() => {
      this.searchList = list;
    });
  };

  private debouncedSearch = debounce(() => {
    this.fetchGoogleSearchPlace();
  }, 500);
}

export const collectionSearchStore = new CollectionSearchStore();
