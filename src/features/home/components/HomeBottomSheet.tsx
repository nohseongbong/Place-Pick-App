import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View} from 'react-native';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';

import style from '../styles/homeBottomSheetStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import CustomText from '../../../shared/components/customComponents/CustomText';
import BottomSheet from '@gorhom/bottom-sheet';
import {SCREEN_NAME} from '../../../shared/constants/navigation';

const HomeBottomSheet = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [bottomSheetInx, setBottomSheetInx] = useState<number>(0);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '35%', '120%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 2) {
      navigation.navigate(SCREEN_NAME.COLLECTION);
      // bottomSheetRef.current?.snapToIndex(0);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );
  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
      <View></View>
    </BottomSheet>
  );
};

export default HomeBottomSheet;
