import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import style from '../styles/homeContainerStyle';
import HomeMap from './HomeMap';
import HomeBottomSheet from './HomeBottomSheet';
import {observer} from 'mobx-react-lite';
import {homeStore} from '../store/homeStore';
import {MarKerType} from '../../../shared/types/place/markerType';
import {courseStore} from '../store/courseStore';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {bottomSheetStore} from '../store/bottomSheetStore';
import {FocusedType} from '../constants/bottomSheetFocusedType';
import {placeDetailStore} from '../store/placeDetailStore';

const HomeContainer = observer(() => {
  const styles = style();

  const [markers, setMarkers] = useState<MarKerType[] | []>([]);

  const onPressNearPlaceBtn = async () => {
    const markers = await homeStore.getFetchNearPlaceList();

    setMarkers(markers);
  };

  useEffect(() => {
    if (placeDetailStore.place_id) {
      onPressNearPlaceBtn();
    }
  }, [placeDetailStore.place_id]);

  return (
    <View style={styles.container}>
      <HomeMap onPressNearPlaceBtn={onPressNearPlaceBtn} markers={markers} />
      <HomeBottomSheet />
      {courseStore.courseList.length > 1 &&
        bottomSheetStore.focusedType === FocusedType.CREATE &&
        bottomSheetStore.bottomSheetIndex !== 0 && (
          <CustomTouchable style={styles.complete_course_wrap}>
            <CustomText style={styles.complete_course_text}>코스 완성하기</CustomText>
          </CustomTouchable>
        )}
    </View>
  );
});

export default HomeContainer;
