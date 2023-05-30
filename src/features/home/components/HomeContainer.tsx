import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import style from '../styles/homeContainerStyle';
import HomeMap from './HomeMap';
import HomeBottomSheet from './HomeBottomSheet';
import {observer} from 'mobx-react-lite';
import {homeStore} from '../store/homeStore';
import {MarKerType} from '../../../shared/types/place/markerType';

const HomeContainer = observer(() => {
  const styles = style();

  const [markers, setMarkers] = useState<MarKerType[] | []>([]);

  const onPressNearPlaceBtn = async () => {
    const markers = await homeStore.getFetchNearPlaceList();
    setMarkers(markers);
  };

  return (
    <View style={styles.container}>
      <HomeMap onPressNearPlaceBtn={onPressNearPlaceBtn} markers={markers} />
      <HomeBottomSheet />
    </View>
  );
});

export default HomeContainer;
