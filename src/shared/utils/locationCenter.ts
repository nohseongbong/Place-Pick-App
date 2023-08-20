import {CourseType} from '../types/place/placeType';

export function locationCenter(courseList: CourseType[]): {
  latitude: number;
  longitude: number;
} {
  const coordinates = courseList.map(course => {
    return {
      longitude: course.location.longitude,
      latitude: course.location.latitude,
    };
  });
  const sumLat = coordinates.reduce((sum, coord) => sum + coord.latitude, 0);
  const sumLng = coordinates.reduce((sum, coord) => sum + coord.longitude, 0);

  const centerLat = sumLat / coordinates.length;
  const centerLng = sumLng / coordinates.length;

  return {
    latitude: centerLat,
    longitude: centerLng,
  };
}

export function centerZoom(courseList: CourseType[]): {
  latitudeDelta: number;
  longitudeDelta: number;
} {
  const coordinates = courseList.map(course => {
    return {
      longitude: course.location.longitude,
      latitude: course.location.latitude,
    };
  });

  if (coordinates.length === 0) {
    return {
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
  }

  const maxLat = Math.max(...coordinates.map(coord => coord.latitude));
  const minLat = Math.min(...coordinates.map(coord => coord.latitude));
  const maxLng = Math.max(...coordinates.map(coord => coord.longitude));
  const minLng = Math.min(...coordinates.map(coord => coord.longitude));

  const latitudeDelta = (maxLat - minLat) * 3;
  const longitudeDelta = (maxLng - minLng) * 3;

  return {
    latitudeDelta,
    longitudeDelta,
  };
}
