import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {observer} from 'mobx-react-lite';

import style from '../styles/homeBottomSheetStyle';
import PlaceDetail from './bottomSheetContents/PlaceDetail';
import CreateCourse from './bottomSheetContents/CreateCourse';
import {bottomSheetStore} from '../store/bottomSheetStore';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';
import PlaceSearch from './bottomSheetContents/PlaceSearch';
import {FocusedType} from '../constants/bottomSheetFocusedType';
import {searchStore} from '../store/searchStore';

const HomeBottomSheet = observer(() => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '30%', '95%'], []);

  useEffect(() => {
    if (bottomSheetStore.focusedType === FocusedType.DETAIL) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [bottomSheetStore.focusedType]);

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );

  useEffect(() => {
    if (searchStore.isFocusSearch) {
      bottomSheetRef.current?.snapToIndex(2);
    }
  }, [searchStore.isFocusSearch]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enableHandlePanningGesture={bottomSheetStore.focusedType !== FocusedType.DETAIL}
      enableOverDrag={bottomSheetStore.focusedType !== FocusedType.DETAIL}
      enableContentPanningGesture={bottomSheetStore.focusedType !== FocusedType.DETAIL}>
      {bottomSheetStore.focusedType === FocusedType.DETAIL && <PlaceDetail />}
      {bottomSheetStore.focusedType === FocusedType.CREATE && <CreateCourse />}
      {bottomSheetStore.focusedType === FocusedType.SEARCH && <PlaceSearch />}
    </BottomSheet>
  );
});

export default HomeBottomSheet;
