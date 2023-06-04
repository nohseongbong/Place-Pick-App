export interface ConnectType {
  start: {
    location: {
      latitude: number;
      longitude: number;
    };
    place_id: string;
  };
  end: {
    location: {
      latitude: number;
      longitude: number;
    };
    place_id: string;
  };
}
