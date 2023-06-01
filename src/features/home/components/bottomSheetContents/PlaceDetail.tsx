import React from 'react';
import {View} from 'react-native';

import style from '../../styles/placeDetailStyle';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {placeDetailStore} from '../../store/placeDetailStore';
import {bottomSheetStore} from '../../store/bottomSheetStore';
import {SVG_IMG} from '../../../../assets/images';
import {palette} from '../../../../shared/constants/palette';
import {FocusedType} from '../../constants/BottomSheetFocusedType';

const PlaceDetail = observer(() => {
  const styles = style();

  const onPressHidePlaceDetail = () => {
    bottomSheetStore.setFocusedType(FocusedType.CREATE);
  };

  return (
    <View style={styles.container}>
      <View style={styles.place_info_container}>
        <SVG_IMG.CATEGORY_RESTAURANT width={36} height={36} />
        <View style={styles.place_info_wrap}>
          <CustomText numberOfLines={3} style={styles.place_info_name_text}>
            땀땀
          </CustomText>
          <CustomText style={styles.place_info_address_text}>강남구 역상동 · 베트남음식</CustomText>
          <View style={styles.place_info_rating_wrap}>
            <SVG_IMG.STAR width={16} height={16} />
            <CustomText style={styles.place_info_rating_text}>4.1</CustomText>
            <SVG_IMG.PEOPLE width={16} height={16} />
            <CustomText style={styles.place_info_rating_text}>1,221</CustomText>
          </View>
        </View>
        <CustomTouchable style={styles.close_wrap} onPress={onPressHidePlaceDetail}>
          <SVG_IMG.CLOSE width={17} height={17} />
        </CustomTouchable>
      </View>
      <View style={styles.btns_wrap}>
        <CustomTouchable style={styles.btn_wrap}>
          <CustomText style={styles.btn_text}>상세 정보</CustomText>
        </CustomTouchable>
        <CustomTouchable style={[styles.btn_wrap, {backgroundColor: palette.PRIMARY}]}>
          <CustomText style={[styles.btn_text, {color: palette.BACKGROUND}]}>장소 선택</CustomText>
        </CustomTouchable>
      </View>
    </View>
  );
});

export default PlaceDetail;
