import React, {memo, useCallback, useMemo, useRef} from 'react';

import style from '../styles/markerStyle';
import {Marker} from 'react-native-maps';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {MarKerType} from '../../../shared/types/place/markerType';
import {observer} from 'mobx-react-lite';
import {homeStore} from '../store/homeStore';

const MarkerView = observer(({marker, key}: {marker: MarKerType; key: number}) => {
  const styles = style();
  const store = homeStore;

  const onPressMarker = () => {
    store.setIsDetailFocused(true);
  };

  return (
    <Marker onPress={onPressMarker} key={key} coordinate={marker.location}>
      <CustomText>{marker.name}</CustomText>
      <CustomText>{marker.category}</CustomText>
    </Marker>
  );
});

export default memo(MarkerView);
