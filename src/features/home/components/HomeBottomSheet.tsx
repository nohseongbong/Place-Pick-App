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
import {homeStore} from '../store/homeStore';

const HomeBottomSheet = observer(() => {
  const store = homeStore;
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [bottomSheetInx, setBottomSheetInx] = useState<number>(0);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '30%', '95%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 2) {
      // navigation.navigate(SCREEN_NAME.SEARCH);
    }
  }, []);

  useEffect(() => {
    if (store.isDetailFocused) {
      console.log('실행');
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [store.isDetailFocused]);

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
      handleIndicatorStyle={{backgroundColor: 'blue'}}
      snapPoints={snapPoints}
      enableHandlePanningGesture={!store.isDetailFocused}
      enableOverDrag={!store.isDetailFocused}
      enableContentPanningGesture={!store.isDetailFocused}
      onChange={handleSheetChanges}>
      <ScrollView style={{flex: 1}}>
        <PlaceDetail />
      </ScrollView>
    </BottomSheet>
  );
});

export default HomeBottomSheet;
