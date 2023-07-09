import React from 'react';
import {Linking, View} from 'react-native';

import style from '../../styles/placeDetailStyle';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {placeDetailStore} from '../../store/placeDetailStore';
import {bottomSheetStore} from '../../store/bottomSheetStore';
import {SVG_IMG} from '../../../../assets/images';
import {palette} from '../../../../shared/constants/palette';
import {FocusedType} from '../../constants/bottomSheetFocusedType';
import {courseStore} from '../../store/courseStore';
import {showPlacePickToast} from '../../../../lib/toast/showToast';
import {CategoryIconView} from '../../../../shared/components/category-icon/CategoryIcon';

const PlaceDetail = observer(() => {
  const styles = style();

  const onPressHidePlaceDetail = () => {
    bottomSheetStore.setFocusedType(FocusedType.CREATE);
  };

  const onPressAddPlace = () => {
    showPlacePickToast();
    courseStore.setAddCourseList(placeDetailStore.getPlaceInfo);
    courseStore.removeCourseNumber();
    bottomSheetStore.setFocusedType(FocusedType.CREATE);
  };

  const onPressPlaceDetail = () => {
    Linking.openURL(placeDetailStore.url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.place_info_container}>
        <CategoryIconView type={placeDetailStore.category} width={36} />
        <View style={styles.place_info_wrap}>
          <CustomText numberOfLines={3} style={styles.place_info_name_text}>
            {placeDetailStore.name}
          </CustomText>
          <CustomText style={styles.place_info_address_text}>{placeDetailStore.formatted_address}</CustomText>
          <View style={styles.place_info_rating_wrap}>
            <SVG_IMG.STAR width={16} height={16} />
            <CustomText style={styles.place_info_rating_text}>{placeDetailStore.rating}</CustomText>
            <SVG_IMG.PEOPLE width={16} height={16} />
            <CustomText style={styles.place_info_rating_text}>{placeDetailStore.user_ratings_total}</CustomText>
          </View>
        </View>
        <CustomTouchable style={styles.close_wrap} onPress={onPressHidePlaceDetail}>
          <SVG_IMG.CLOSE width={17} height={17} />
        </CustomTouchable>
      </View>
      <View style={styles.btns_wrap}>
        <CustomTouchable onPress={onPressPlaceDetail} style={styles.btn_wrap}>
          <CustomText style={styles.btn_text}>상세 정보</CustomText>
        </CustomTouchable>
        <CustomTouchable onPress={onPressAddPlace} style={[styles.btn_wrap, {backgroundColor: palette.PRIMARY}]}>
          <CustomText style={[styles.btn_text, {color: palette.BACKGROUND}]}>장소 선택</CustomText>
        </CustomTouchable>
      </View>
    </View>
  );
});

export default PlaceDetail;
