import React, {useCallback, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MapView, {Marker, MapViewProps, Region, Details} from 'react-native-maps';
import style from '../styles/homeMapStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

type RegionType = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const HomeMap = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [region, setRegion] = useState({
    latitude: 37.521661,
    longitude: 127.023333,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState({lat: 0, lng: 0});

  const handleMapRegionChange = useCallback((region: RegionType) => {
    setRegion(region);
  }, []);

  const handlePlaceSelected = useCallback(async (latitude: number, longitude: number) => {
    // Call Google Places API to get nearby restaurants
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyAsDTMB-Vk1B83JbfYygFy7bflCRKvh8DM`,
    );
    const data = await response.json();
    // console.log(JSON.stringify(data.results), ' : 결과');
    // console.log(data.results.length, ' : 결과');
    const markers = data?.results.map(place => ({
      coordinate: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      title: place.name,
      description: place.vicinity,
    }));

    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${'ChIJ6YJrRtxaezUR7-ENDWH1O_8'}&fields=name,formatted_address,website&key=AIzaSyAsDTMB-Vk1B83JbfYygFy7bflCRKvh8DM`,
    )
      .then(response => response.json())
      .then(data => {
        const {result} = data;
        console.log(result, ' 이겅');
      });

    setMarkers(markers);
  }, []);
  const geoLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        // setRegion({
        //   latitude: Number(latitude),
        //   longitude: Number(longitude),
        //   latitudeDelta: 0.001,
        //   longitudeDelta: 0.001,
        // });
        handlePlaceSelected(37.521661, 127.023333);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Location Permission',
        message: 'App needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        // 위치 권한이 부여되었을 때 수행할 로직 추가
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    // requestLocationPermission();
    geoLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map_wrap}
        provider={Platform.OS === 'android' ? 'google' : undefined}
        mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
        region={region}
        onRegionChangeComplete={handleMapRegionChange}>
        {markers.map(marker => (
          <Marker key={marker.title} coordinate={marker.coordinate} title={marker.title} />
        ))}
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails
        onPress={handlePlaceSelected}
        query={{
          key: 'AIzaSyAsDTMB-Vk1B83JbfYygFy7bflCRKvh8DM',
          language: 'en',
          types: '(cities)',
        }}
      />
    </View>
  );
};

export default HomeMap;
