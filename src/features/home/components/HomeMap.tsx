import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, View, Image} from 'react-native';
import {toJS} from 'mobx';
import MapViewClustering from 'react-native-map-clustering';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {observer} from 'mobx-react-lite';

import style from '../styles/homeMapStyle';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {mapStyle} from '../constants/mapStyle';
import {homeStore} from '../store/homeStore';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {userStore} from '../../../shared/store/userStore';
import {placeDetailStore} from '../store/placeDetailStore';
import {IMG} from '../../../assets/images';
import {MarKerType} from '../../../shared/types/place/markerType';
import {courseStore} from '../store/courseStore';
import {PlaceType} from '../../../shared/types/place/placeType';
import {CategoryIconView, CourseCategoryIconView} from '../../../shared/components/category-icon/CategoryIcon';

const HomeMap = observer(() => {
  const styles = style();
  const mapRef = useRef<MapView>(null);
  const [selectMarkers, setSelectMarkers] = useState<PlaceType[] | []>([]);
  const [markers, setMarkers] = useState<MarKerType[] | []>([]);

  const fetchPlaceDetail = async (place_id: string) => {
    await placeDetailStore.fetchPlaceDetail(place_id);
  };

  const onPressMarker = useCallback(
    (marker: MarKerType) => {
      fetchPlaceDetail(marker.place_id);
    },
    [markers],
  );

  const onPressNearPlaceBtn = async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const markers = await homeStore.getFetchNearPlaceList();
    setMarkers(markers);
  };

  const onPressMyLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({...userStore.userLocation}, 500);
    }
  };
  const onPressNearPlace = () => {
    homeStore.setIsNearPlace(false);
    onPressNearPlaceBtn();
  };

  const getMapCenter = useCallback((e: any) => {
    homeStore.setIsNearPlace(true);
    homeStore.setSearchLocation(e);
  }, []);

  const MarkerView = (marker: MarKerType, index: number) => {
    if (courseStore.courseList.find(item => item.place_id === marker.place_id)) {
      return null;
    }
    return (
      <Marker
        onPress={() => onPressMarker(marker)}
        coordinate={marker.location}
        key={String(index) + marker.place_id}
        id={marker.place_id}>
        <View style={styles.marker_container}>
          <CategoryIconView type={marker.category} width={28} />
          <CustomText numberOfLines={3} style={styles.marker_text}>
            {marker.name}
          </CustomText>
        </View>
      </Marker>
    );
  };

  const SelectMarkerView = (marker: any, index: number) => {
    return (
      <Marker
        style={{zIndex: 10000}}
        onPress={() => onPressMarker(marker)}
        coordinate={marker.location}
        key={String(index) + marker.place_id}
        id={marker.place_id}>
        <View style={styles.marker_container}>
          <View style={styles.selected_icon_wrap}>
            <CourseCategoryIconView type={marker.category} width={28} />
            <CustomText style={styles.selected_icon_text}>{index + 1}</CustomText>
          </View>
          <CustomText numberOfLines={3} style={styles.marker_text}>
            {marker.name}
          </CustomText>
        </View>
      </Marker>
    );
  };

  useEffect(() => {
    setSelectMarkers(toJS(courseStore.courseList));
  }, [courseStore.courseList]);

  useEffect(() => {
    const fetchDetail = async () => {
      const obj = await placeDetailStore.fetchPlaceDetail(placeDetailStore.place_id);
      if (obj && !markers.find(item => item.place_id === obj.place_id)) {
        const arr = [...markers, obj];
        setMarkers(arr);
      }
    };
    if (placeDetailStore.place_id && placeDetailStore.isSearchPlaceDetail) {
      fetchDetail();
    }

    placeDetailStore.setIsSearchPlaceDetail(false);
  }, [placeDetailStore.place_id]);

  return (
    <View style={styles.container}>
      {homeStore.isNearPlace && (
        <CustomTouchable onPress={onPressNearPlace} style={styles.near_place_btn}>
          <CustomText style={styles.near_place_btn_text}>이 지역 검색</CustomText>
        </CustomTouchable>
      )}
      {Platform.OS === 'ios' && (
        <CustomTouchable activeOpacity={0.3} style={styles.my_location_btn_wrap} onPress={onPressMyLocation}>
          <Image source={IMG.MY_LOCATION} style={styles.my_location_btn_img} />
        </CustomTouchable>
      )}

      <MapViewClustering
        ref={mapRef}
        style={styles.map_wrap}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{...homeStore.mapLocation}}
        onRegionChangeComplete={getMapCenter}
        followsUserLocation={true}
        userLocationCalloutEnabled={true}
        showsCompass={false}
        showsTraffic={true}
        clusterColor={'#ddd'}
        clusteringEnabled={true}
        mapPadding={{bottom: 100, top: 0, right: 0, left: 0}}
        showsUserLocation={true}>
        {selectMarkers.map((marker: any, index) => {
          return SelectMarkerView(marker, index);
        })}

        {markers.map((marker: any, index: number) => {
          return MarkerView(marker, index);
        })}
      </MapViewClustering>
    </View>
  );
});

export default HomeMap;
