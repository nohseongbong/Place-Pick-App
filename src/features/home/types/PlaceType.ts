export interface PlaceType {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
  icon: string;
  place_id: string;
  rating: number;
  user_ratings_total: number;
  types: string[];
}
