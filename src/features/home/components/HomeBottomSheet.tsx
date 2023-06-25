import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {observer} from 'mobx-react-lite';

import style from '../styles/homeBottomSheetStyle';
import PlaceDetail from './bottomSheetContents/PlaceDetail';
import CreateCourse from './bottomSheetContents/CreateCourse';
import {bottomSheetStore} from '../store/bottomSheetStore';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';
import PlaceSearch from './bottomSheetContents/PlaceSearch';
import {FocusedType} from '../constants/bottomSheetFocusedType';
import {searchStore} from '../store/searchStore';
import {View} from 'react-native';

const HomeBottomSheet = observer(() => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '30%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetStore.setBottomSheetIndex(index);
  }, []);

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );

  useEffect(() => {
    if (bottomSheetStore.focusedType === FocusedType.DETAIL) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [bottomSheetStore.focusedType]);

  useEffect(() => {
    if (searchStore.isFocusSearch) {
      bottomSheetRef.current?.snapToIndex(2);
    }
  }, [searchStore.isFocusSearch]);

  useEffect(() => {
    // console.log(bottomSheetStore.bottomSheetIndex);
  }, [bottomSheetStore.bottomSheetIndex]);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleComponent={() => {
        return (
          <>
            <View style={styles.handler_wrap}>
              <View style={styles.handler} />
            </View>
          </>
        );
      }}
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
