import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {observer} from 'mobx-react-lite';

import {View} from 'react-native';
import CollectionPlaceSearch from './CollectionPlaceSearch';
import style from '../../styles/searchBottomSheetStyle';
import {collectionDetailStore} from '../../store/collectionDetailStore';

const SearchBottomSheet = observer(() => {
  const styles = style();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      collectionDetailStore.setIsSearch(false);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      bottomSheetRef.current?.snapToIndex(1);
    }, []),
  );

  useEffect(() => {
    if (collectionDetailStore.isSearch) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [collectionDetailStore.isSearch]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      handleComponent={() => {
        return (
          <>
            <View style={styles.handler_wrap}>
              <View style={styles.handler} />
            </View>
          </>
        );
      }}>
      <CollectionPlaceSearch />
    </BottomSheet>
  );
});

export default SearchBottomSheet;
