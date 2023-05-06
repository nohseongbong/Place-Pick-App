import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {GOOGLE_PLACE_API_KEY} from '@env';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MapView from 'react-native-map-clustering';
import {Marker, MapMarkerProps, MapViewProps, Region, Details, PROVIDER_GOOGLE} from 'react-native-maps';
import {observer} from 'mobx-react-lite';
import style from '../styles/homeMapStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import {GooglePlacesAutocomplete, PlaceType} from 'react-native-google-places-autocomplete';
import {requestLocationPermission} from '../../../shared/utils/permission';
import {RegionType} from '../types/RegionType';
import {api} from '../../../shared/api/api';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {mapStyle} from '../constants/mapStyle';
import {getGeoLocation} from '../../../shared/utils/getGeoLocation';
import {homeStore} from '../store/homeStore';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {MarKerType} from '../../../shared/types/place/markerType';
import MarkerView from './MarkerView';
import {userStore} from '../../../shared/store/userStore';
import {initLocation} from '../constants/initLocation';

const HomeMap = observer(({onPressNearPlaceBtn, markers}: any) => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handlePlaceSelected = useCallback(async (latitude: number, longitude: number) => {
    const response2 = await api.getGooglePlaceDetail({place_id: 'ChIJ6YJrRtxaezUR7-ENDWH1O_8'});
    // console.log(response2.data.result, ' 디테일');
  }, []);

  const getMapCenter = useCallback((e: any) => {
    homeStore.setSearchLocation(e);
  }, []);

  return (
    <View style={styles.container}>
      <CustomTouchable onPress={onPressNearPlaceBtn} style={styles.near_place_btn}>
        <CustomText>주변 검색</CustomText>
      </CustomTouchable>
      <MapView
        style={styles.map_wrap}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{...userStore.userLocation}}
        onRegionChangeComplete={getMapCenter}
        followsUserLocation={true}
        userLocationCalloutEnabled={true}
        showsCompass={false}
        showsTraffic={true}
        mapPadding={{top: 50, right: 0, bottom: 50, left: 0}}
        showsUserLocation={true}>
        {markers.map((marker: any) => (
          <Fragment key={marker.place_id}>
            <MarkerView marker={marker} />
          </Fragment>
        ))}
      </MapView>
    </View>
  );
});

export default HomeMap;
