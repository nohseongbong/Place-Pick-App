import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../../../shared/api/google/api';
import {dummyData} from '../../../shared/utils/test';
import {PlaceType} from '../../../shared/types/place/placeType';
import {searchTabType} from '../constants/searchTabType';

class SearchStore {
  searchText: string = '';
  searchList: PlaceType[] = [];
  activeTab: string = searchTabType.ALL;
  isFocusSearch: boolean = false;
  constructor() {
    makeAutoObservable(this);
    this.setSearchList();
  }

  setSearchList = () => {
    runInAction(() => {
      this.searchList = dummyData();
    });
  };

  setActiveTab = (type: string) => {
    this.activeTab = type;
  };

  setIsFocusSearch = (state: boolean) => {
    this.isFocusSearch = state;
  };
}

export const searchStore = new SearchStore();
