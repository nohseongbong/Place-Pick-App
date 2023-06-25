import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {mapStyle} from '../../../../features/home/constants/mapStyle';
import style from '../styles/courseMapView';

const CourseMapView = () => {
  const styles = style();
  const initialRegion = {
    latitude: 37.4979052,
    longitude: 127.0275777,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map_wrap}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        // region={{...homeStore.mapLocation}}
        // onRegionChangeComplete={getMapCenter}
        initialRegion={initialRegion}></MapView>
    </View>
  );
};

export default CourseMapView;
