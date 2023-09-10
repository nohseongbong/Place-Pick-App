import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../../../../features/home/constants/mapStyle';
import style from '../styles/courseMapView';
import {CourseType} from '../../../types/place/placeType';
import {CourseCategoryIconView} from '../../category-icon/CategoryIcon';
import CustomText from '../../customComponents/CustomText';
import {centerZoom} from '../../../utils/locationCenter';
import {palette} from '../../../constants/palette';

type Props = {
  location: {
    latitude: number;
    longitude: number;
  };
  courseList: CourseType[];
};

const initialRegion = {
  latitude: 37.4979052,
  longitude: 127.0275777,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001,
};

const CourseMapView = ({location, courseList}: Props) => {
  const styles = style();
  const region = {
    ...location,
    ...centerZoom(courseList),
  };

  const markerCoordinates = courseList.map(course => course.location);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map_wrap}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={region}
        initialRegion={initialRegion}>
        {courseList.map((course, index) => {
          return (
            <Marker coordinate={course.location} key={course.place_id} id={course.place_id}>
              <View style={styles.marker_container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <CourseCategoryIconView type={course.category} width={28} />
                  <CustomText style={styles.marker_num}>{index + 1}</CustomText>
                </View>
              </View>
            </Marker>
          );
        })}
        <Polyline coordinates={markerCoordinates} strokeColor={palette.PRIMARY} strokeWidth={4} />
      </MapView>
    </View>
  );
};

export default CourseMapView;
