import {makeAutoObservable} from 'mobx';

class CoursePlaceModel {
  coordinate: {
    latitude: number;
    longitude: number;
  } = {latitude: 0, longitude: 0};
  title: string = '';
  description: string = '';
  icon: string = '';
  place_id: string = '';
  rating: number = 0;
  user_ratings_total: number = 0;
  types: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default CoursePlaceModel;
