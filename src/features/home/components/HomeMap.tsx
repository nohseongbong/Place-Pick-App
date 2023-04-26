import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {GOOGLE_PLACE_API_KEY} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MapView, {Marker, MapMarkerProps, MapViewProps, Region, Details, PROVIDER_GOOGLE} from 'react-native-maps';
import style from '../styles/homeMapStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {PlaceType} from 'react-native-google-places-autocomplete';
import {requestLocationPermission} from '../../../shared/utils/permission';
import {RegionType} from '../types/RegionType';
import {api} from '../../../shared/api/api';

const HomeMap = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [region, setRegion] = useState<RegionType>({
    latitude: 37.521661,
    longitude: 127.023333,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [markers, setMarkers] = useState<MapMarkerProps[]>([]);
  const [location, setLocation] = useState({lat: 0, lng: 0});

  const handleMapRegionChange = useCallback((region: RegionType) => {
    // setRegion(region);
  }, []);

  const handlePlaceSelected = useCallback(async (latitude: number, longitude: number) => {
    // Call Google Places API to get nearby restaurants
    const response = await api.getGooglePlaceList({latitude, longitude});
    const data = response.data.results;
    // console.log(data, ' : 결과');
    // console.log(data.results.length, ' : 결과');
    console.log(data[0].photos[0].html_attributions);
    const markers = data?.map((place: any) => ({
      coordinate: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
      title: place.name,
      description: place.vicinity,
      icon: place.icon,
      id: place.place_id,
      rating: place.rating,
      user_ratings_total: place.user_ratings_total,
      types: place.types,
    }));

    const response2 = await api.getGooglePlaceDetail({place_id: 'ChIJ6YJrRtxaezUR7-ENDWH1O_8'});
    console.log(response2.data.result, ' 디테일');

    setMarkers(markers);
  }, []);

  useEffect(() => {
    requestLocationPermission();
    handlePlaceSelected(37.521661, 127.023333);
  }, []);

  const mapStyle = [
    {
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.government',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.medical',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.school',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text',
      stylers: [
        {
          lightness: 60,
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map_wrap}
        customMapStyle={mapStyle}
        provider={'google'}
        region={region}
        mapPadding={{top: 50, right: 0, bottom: 50, left: 0}}
        showsUserLocation={true}
        onRegionChangeComplete={handleMapRegionChange}>
        {markers.map(marker => (
          <Marker key={marker.id} coordinate={marker.coordinate} title={marker.title} image={marker.icon} />
        ))}
      </MapView>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails
        onPress={handlePlaceSelected}
        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
      /> */}
    </View>
  );
};

export default HomeMap;
