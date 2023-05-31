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
    if (bottomSheetStore.focusedType === 'detail') {
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
      enableHandlePanningGesture={bottomSheetStore.focusedType !== 'detail'}
      enableOverDrag={bottomSheetStore.focusedType !== 'detail'}
      enableContentPanningGesture={bottomSheetStore.focusedType !== 'detail'}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView contentContainerStyle={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          {bottomSheetStore.focusedType === 'detail' && <PlaceDetail />}
          {bottomSheetStore.focusedType === 'create' && <CreateCourse />}
        </ScrollView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default HomeBottomSheet;
