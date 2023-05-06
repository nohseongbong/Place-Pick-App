import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Button, PanResponder, Platform, View} from 'react-native';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {observer} from 'mobx-react-lite';

import style from '../styles/homeBottomSheetStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import {showPlacePickToast} from '../../../lib/toast/showToast';
import PlaceDetail from './bottomSheetContents/PlaceDetail';
import {placeDetailStore} from '../store/placeDetailStore';

const HomeBottomSheet = observer(() => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '30%', '95%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index === 2) {
      // navigation.navigate(SCREEN_NAME.SEARCH);
    }
  }, []);

  useEffect(() => {
    if (placeDetailStore.isDetailFocused) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [placeDetailStore.isDetailFocused]);

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleStyle={{paddingBottom: 30}}
      snapPoints={snapPoints}
      enableHandlePanningGesture={!placeDetailStore.isDetailFocused}
      enableOverDrag={!placeDetailStore.isDetailFocused}
      enableContentPanningGesture={!placeDetailStore.isDetailFocused}
      onChange={handleSheetChanges}>
      <ScrollView style={{flex: 1}}>{placeDetailStore.isDetailFocused && <PlaceDetail />}</ScrollView>
    </BottomSheet>
  );
});

export default HomeBottomSheet;
