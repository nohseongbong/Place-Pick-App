export interface PlaceType {
  place_id: string;
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
  //   types: string[];
  category: string;
  location: {
    lat: number;
    lng: number;
  };
}
