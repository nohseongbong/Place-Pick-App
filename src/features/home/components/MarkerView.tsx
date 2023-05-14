import React, {memo, useCallback} from 'react';
import {Marker} from 'react-native-maps';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {MarKerType} from '../../../shared/types/place/markerType';
import {observer} from 'mobx-react-lite';
import {userStore} from '../../../shared/store/userStore';
import {placeDetailStore} from '../store/placeDetailStore';
import {SVG_IMG} from '../../../assets/images';
import {View} from 'react-native';
import style from '../styles/markerStyle';

const MarkerView = observer(({marker}: {marker: MarKerType}) => {
  const styles = style();
  const fetchPlaceDetail = async () => {
    await placeDetailStore.fetchPlaceDetail(marker.place_id);
  };

  const onPressMarker = useCallback(() => {
    fetchPlaceDetail();
    userStore.setUserLocation({
      latitude: marker.location.latitude,
      longitude: marker.location.longitude,
    });
    placeDetailStore.setIsDetailFocused(true);
  }, [marker]);

  const CategoryIconView = () => {
    const category: {[key: string]: JSX.Element} = {
      restaurant: <SVG_IMG.CATEGORY_RESTAURANT width={28} height={28} />,
      bar: <SVG_IMG.CATEGORY_BAR width={28} height={28} />,
      park: <SVG_IMG.CATEGORY_PARK width={28} height={28} />,
      store: <SVG_IMG.CATEGORY_SHOP width={28} height={28} />,
      cafe: <SVG_IMG.CATEGORY_CAFE width={28} height={28} />,
      point_of_interest: <SVG_IMG.CATEGORY_FLAG width={28} height={28} />,
    };
    return category[marker.category];
  };

  return (
    <Marker onPress={onPressMarker} coordinate={marker.location}>
      <View style={styles.marker_container}>
        <CategoryIconView />
        <CustomText style={styles.marker_text}>{marker.name}</CustomText>
      </View>
    </Marker>
  );
});

export default memo(MarkerView);
