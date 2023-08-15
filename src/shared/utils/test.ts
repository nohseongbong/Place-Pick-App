import {PlaceCategoryType} from '../constants/placeCategoryType';
import {PlaceType} from '../types/place/placeType';

export const dummyData = function () {
  let arr: PlaceType[] = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      place_id: String(index),
      name: '땀땀',
      category: PlaceCategoryType.FOOD,
      formatted_address: '경기도 용인시',
      rating: 3.5,
      user_ratings_total: 3000,
      location: {latitude: 43.0, longitude: 40.0},
      url: '',
    });
  }
  return arr;
};
