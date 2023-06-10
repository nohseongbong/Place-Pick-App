import {memo, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import style from '../../styles/courseStyle';
import {PlaceCategoryType} from '../../../../shared/constants/placeCategoryType';
import {SVG_IMG} from '../../../../assets/images';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import {courseStore} from '../../store/courseStore';
import {PlaceType} from '../../../../shared/types/place/placeType';
import {palette} from '../../../../shared/constants/palette';
import {showPlaceRemoveToast} from '../../../../lib/toast/showToast';

const Course = observer(({item, index}: {item: PlaceType; index: number}) => {
  const styles = style();
  const [isMore, setIsMore] = useState<boolean>(false);

  const toggleIsMore = () => {
    setIsMore(!isMore);
  };

  const onPressRemoveCourse = () => {
    showPlaceRemoveToast();
    courseStore.setRemoveCourseList(index);
  };

  return (
    <>
      <CustomTouchable activeOpacity={1} style={styles.container}>
        <View style={styles.selected_wrap}>
          <View style={styles.selected_icon_wrap}>
            {item?.category === PlaceCategoryType.BAR && <SVG_IMG.COURSE_BAR width={22} height={22} />}
            {item?.category === PlaceCategoryType.PARK && <SVG_IMG.COURSE_PARK width={22} height={22} />}
            {item?.category === PlaceCategoryType.RESTAURANT && <SVG_IMG.COURSE_RESTAURANT width={22} height={22} />}
            {item?.category === PlaceCategoryType.STORE && <SVG_IMG.COURSE_STORE width={22} height={22} />}
            {item?.category === PlaceCategoryType.CAFE && <SVG_IMG.COURSE_CAFE width={22} height={22} />}
            {item?.category === PlaceCategoryType.TRAIN && <SVG_IMG.COURSE_TRAIN width={22} height={22} />}
            {item?.category === PlaceCategoryType.POINT_OF_INTEREST && (
              <SVG_IMG.COURSE_CULTURE width={22} height={22} />
            )}
            <CustomText style={styles.selected_icon_text}>{index + 1}</CustomText>
          </View>
          <CustomText style={styles.selected_text}>{item.name}</CustomText>
          <CustomTouchable onPress={toggleIsMore} style={styles.more_wrap}>
            <SVG_IMG.MORE width={3} height={15} />
          </CustomTouchable>
        </View>
        {isMore && (
          <View style={styles.more_content_wrap}>
            <CustomTouchable onPress={onPressRemoveCourse} style={styles.more_content_btn}>
              <SVG_IMG.TRASH width={16} height={16} />
              <CustomText style={[styles.more_content_btn_text, {color: palette.PRIMARY}]}>삭제하기</CustomText>
            </CustomTouchable>
            <CustomTouchable style={styles.more_content_btn}>
              <SVG_IMG.WRITE width={16} height={16} />
              <CustomText style={styles.more_content_btn_text}>수정하기</CustomText>
            </CustomTouchable>
          </View>
        )}
      </CustomTouchable>

      {courseStore.courseConectList.length !== 0 && courseStore.courseConectList[index] && (
        <View style={styles.connect_wrap}>
          <SVG_IMG.CONNECT_BORDER />
          <CustomTouchable style={styles.connect_btn_wrap}>
            <SVG_IMG.GOOGLE_MAP width={24} height={24} />
            <CustomText>구글 맵에서 길찾기</CustomText>
          </CustomTouchable>
        </View>
      )}
    </>
  );
});
export default memo(Course);
