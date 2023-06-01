import React from 'react';
import {Image, View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {placeDetailStore} from '../../store/placeDetailStore';
import {bottomSheetStore} from '../../store/bottomSheetStore';
import {IMG, SVG_IMG} from '../../../../assets/images';
import {palette} from '../../../../shared/constants/palette';
import style from '../../styles/placeSearchStyle';
import CustomTextInput from '../../../../shared/components/customComponents/CustomTextInput';

const PlaceSearch = observer(() => {
  const styles = style();

  return (
    <View style={styles.container}>
      <View style={styles.search_bar_wrap}>
        <View style={styles.search_text_wrap}>
          <CustomTouchable style={styles.search_btn}>
            <SVG_IMG.SEARCH width={16} height={16} />
          </CustomTouchable>
          <CustomTextInput style={styles.search_input} keyboardType="web-search" placeholder="검색" />
          <CustomTouchable style={styles.search_remove_btn}>
            <SVG_IMG.SEARCH_REMOVE width={16} height={16} />
          </CustomTouchable>
        </View>
        <CustomTouchable style={styles.close_btn}>
          <CustomText style={styles.close_text}>취소</CustomText>
        </CustomTouchable>
      </View>
    </View>
  );
});

export default PlaceSearch;
