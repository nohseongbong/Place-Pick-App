import React, {memo, useCallback} from 'react';

import style from '../styles/markerStyle';
import {Marker} from 'react-native-maps';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {MarKerType} from '../../../shared/types/place/markerType';
import {observer} from 'mobx-react-lite';
import {userStore} from '../../../shared/store/userStore';
import {placeDetailStore} from '../store/placeDetailStore';

const MarkerView = observer(({marker}: {marker: MarKerType}) => {
  const styles = style();

  const fetchPlaceDetail = async () => {
    await placeDetailStore.fetchPlaceDetail(marker.place_id);
  };

  const onPressMarker = useCallback(() => {
    fetchPlaceDetail();
    userStore.setUserLocation({latitude: marker.location.latitude, longitude: marker.location.longitude});
    placeDetailStore.setIsDetailFocused(true);
  }, []);

  return (
    <Marker onPress={onPressMarker} coordinate={marker.location}>
      <CustomText>{marker.name}</CustomText>
      <CustomText>{marker.category}</CustomText>
    </Marker>
  );
});

export default memo(MarkerView);
