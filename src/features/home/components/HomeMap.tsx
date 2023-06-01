import React, {useCallback, useRef} from 'react';
import {Platform, View, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
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
import {IMG, SVG_IMG} from '../../../assets/images';
import {bottomSheetStore} from '../store/bottomSheetStore';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';
import {MarKerType} from '../../../shared/types/place/markerType';
import {FocusedType} from '../constants/BottomSheetFocusedType';

const HomeMap = observer(({onPressNearPlaceBtn, markers}: any) => {
  const styles = style();
  const mapRef = useRef<MapView>(null);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const fetchPlaceDetail = async (place_id: string) => {
    await placeDetailStore.fetchPlaceDetail(place_id);
  };

  const onPressMarker = useCallback(
    (marker: MarKerType) => {
      fetchPlaceDetail(marker.place_id);
      homeStore.setMapLocation({
        latitude: marker.location.latitude,
        longitude: marker.location.longitude,
      });
      bottomSheetStore.setFocusedType(FocusedType.DETAIL);
    },
    [markers],
  );

  const onPressMyLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({...userStore.userLocation}, 500);
    }
  };

  const getMapCenter = useCallback((e: any) => {
    homeStore.setSearchLocation(e);
  }, []);

  const CategoryIconView = ({type}: {type: string}) => {
    const category: {[key: string]: JSX.Element} = {
      restaurant: <SVG_IMG.CATEGORY_RESTAURANT width={28} height={28} />,
      bar: <SVG_IMG.CATEGORY_BAR width={28} height={28} />,
      park: <SVG_IMG.CATEGORY_PARK width={28} height={28} />,
      store: <SVG_IMG.CATEGORY_SHOP width={28} height={28} />,
      cafe: <SVG_IMG.CATEGORY_CAFE width={28} height={28} />,
      point_of_interest: <SVG_IMG.CATEGORY_FLAG width={28} height={28} />,
    };
    return category[type];
  };

  const MarkerView = (marker: any, index: number) => {
    return (
      <Marker
        onPress={() => onPressMarker(marker)}
        coordinate={marker.location}
        key={String(index) + marker.id}
        id={marker.id}>
        <View style={styles.marker_container}>
          <CategoryIconView type={marker.category} />
          <CustomText style={styles.marker_text}>{marker.name}</CustomText>
        </View>
      </Marker>
    );
  };

  return (
    <View style={styles.container}>
      <CustomTouchable onPress={onPressNearPlaceBtn} style={styles.near_place_btn}>
        <CustomText style={styles.near_place_btn_text}>이 지역 검색</CustomText>
      </CustomTouchable>
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
        mapPadding={{top: 50, right: 0, bottom: 50, left: 0}}
        showsUserLocation={true}>
        {markers.map((marker: any, index: number) => {
          return MarkerView(marker, index);
        })}
      </MapViewClustering>
    </View>
  );
});

export default HomeMap;
