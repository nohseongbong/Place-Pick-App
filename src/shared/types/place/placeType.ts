import {PlaceCategoryType} from '../../constants/placeCategoryType';

export interface PlaceType {
  place_id: string;
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
  // type: PlaceCategoryType;
  category: PlaceCategoryType;
  location: {
    lat: number;
    lng: number;
  };
}
