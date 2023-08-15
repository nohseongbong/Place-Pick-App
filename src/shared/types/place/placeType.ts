import {PlaceCategoryType} from '../../constants/placeCategoryType';

export interface PlaceType {
  place_id: string;
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
  url: string;
  category: PlaceCategoryType;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface CourseType {
  place_id: string;
  name: string;
  category: PlaceCategoryType;
  location: {
    latitude: number;
    longitude: number;
  };
}
