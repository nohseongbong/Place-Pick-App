import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button, Platform, View} from 'react-native';
import {NavigationProp, useFocusEffect, useNavigation} from '@react-navigation/native';

import style from '../styles/homeBottomSheetStyle';
import {RootStackParamList} from '../../../shared/types/navigation/pramsType';
import CustomText from '../../../shared/components/customComponents/CustomText';
import BottomSheet from '@gorhom/bottom-sheet';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import {ScrollView} from 'react-native-gesture-handler';
import {showPlacePickToast} from '../../../lib/toast/showToast';

const HomeBottomSheet = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [bottomSheetInx, setBottomSheetInx] = useState<number>(0);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '35%', '120%'], []);

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 2) {
      navigation.navigate(SCREEN_NAME.SEARCH);
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
      <ScrollView style={{flex: 1}}>
        <Button title="Show Toast" onPress={() => showPlacePickToast()} />
        <View
          style={{width: '100%', height: 1000, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
          <CustomText>바텀 시트</CustomText>
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

export default HomeBottomSheet;
