import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/createCourseStyle';

const CreateCourse = observer(() => {
  const styles = style();
  return (
    <View style={styles.container}>
      <View style={styles.title_wrap}>
        <CustomText style={[styles.title_text, styles.title_strong_text]}>나만의 코스</CustomText>
        <CustomText style={styles.title_text}>를 만들어주세요! 😎</CustomText>
      </View>
      <View style={styles.place_pick_wrap}>
        <View style={styles.place_pick_title}>
          <SVG_IMG.PICK_PLACE_DEFAULT width={22} height={22} />
          <CustomText style={styles.place_pick_title_text}>첫 번째 장소를 선택해주세요.</CustomText>
        </View>
        <CustomTouchable style={styles.place_pick_search_wrap}>
          <SVG_IMG.SEARCH width={16} height={16} />
          <CustomText style={styles.place_pick_search_text}>지역 / 음식점 / 카페 / 가볼만한곳 추가</CustomText>
        </CustomTouchable>
      </View>

      <CustomTouchable style={styles.select_place_wrap}>
        <SVG_IMG.PICK_PLACE_DEFAULT width={22} height={22} />
        <CustomText style={styles.select_place_text}>다음 장소를 선택해주세요.</CustomText>
      </CustomTouchable>

      <CustomTouchable style={styles.add_place_wrap}>
        <SVG_IMG.PLUS_ADD width={10} height={10} />
        <CustomText style={styles.add_place_text}>장소 추가하기</CustomText>
      </CustomTouchable>
    </View>
  );
});

export default CreateCourse;
