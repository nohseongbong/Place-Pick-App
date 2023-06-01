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
import {FocusedType} from '../constants/BottomSheetFocusedType';

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
    if (bottomSheetStore.focusedType === FocusedType.DETAIL) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [bottomSheetStore.focusedType]);

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enableHandlePanningGesture={bottomSheetStore.focusedType !== FocusedType.DETAIL}
      enableOverDrag={bottomSheetStore.focusedType !== FocusedType.DETAIL}
      enableContentPanningGesture={bottomSheetStore.focusedType !== FocusedType.DETAIL}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView contentContainerStyle={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          {bottomSheetStore.focusedType === FocusedType.DETAIL && <PlaceDetail />}
          {bottomSheetStore.focusedType === FocusedType.CREATE && <CreateCourse />}
          {bottomSheetStore.focusedType === FocusedType.SEARCH && <PlaceSearch />}
        </ScrollView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default HomeBottomSheet;
