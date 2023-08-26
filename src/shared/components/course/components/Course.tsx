import {memo, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../customComponents/CustomTouchable';
import style from '../styles/courseStyle';
import {PlaceCategoryType} from '../../../constants/placeCategoryType';
import {SVG_IMG} from '../../../../assets/images';
import CustomText from '../../customComponents/CustomText';
import {courseStore} from '../../../../features/home/store/courseStore';
import {CourseType} from '../../../types/place/placeType';
import {palette} from '../../../constants/palette';
import {ConnectType} from '../../../../features/home/types/ConnectType';

interface Props {
  item: CourseType;
  index: number;
  isMoreState: boolean;
  courseConectList: ConnectType[];
  onPressRemoveCourse?: (index: number) => void;
  onPressEditCourse?: (index: number) => void;
}

const Course = observer(
  ({item, index, isMoreState, courseConectList, onPressRemoveCourse, onPressEditCourse}: Props) => {
    const styles = style();
    const [isMore, setIsMore] = useState<boolean>(false);

    const toggleIsMore = () => {
      setIsMore(!isMore);
    };

    const onPressLoadMap = async () => {
      const start = item;
      const end = courseStore.courseList[index + 1];
      await Linking.openURL(
        `kakaomap://route?sp=${start.location.latitude},${start.location.longitude}&ep=${end.location.latitude},${end.location.longitude}&by=FOOT`,
      )
        .then(res => {
          console.log(res, '  : loadMap ');
        })
        .catch(err => {
          if (Platform.OS === 'android') {
            Linking.openURL('https://play.google.com/store/apps/details?id=net.daum.android.map&hl=ko-KR');
          } else {
            Linking.openURL(
              'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-no-1-%EC%A7%80%EB%8F%84%EC%95%B1/id304608425',
            );
          }
          console.log(err, '  : err ');
        });
    };

    return (
      <>
        <CustomTouchable activeOpacity={1} style={styles.container}>
          <View style={styles.selected_wrap}>
            <View style={styles.selected_icon_wrap}>
              {item?.category === PlaceCategoryType.BAR && <SVG_IMG.COURSE_BAR width={22} height={22} />}
              {item?.category === PlaceCategoryType.PARK && <SVG_IMG.COURSE_PARK width={22} height={22} />}
              {item?.category === PlaceCategoryType.FOOD && <SVG_IMG.COURSE_RESTAURANT width={22} height={22} />}
              {item?.category === PlaceCategoryType.STORE && <SVG_IMG.COURSE_STORE width={22} height={22} />}
              {item?.category === PlaceCategoryType.CAFE && <SVG_IMG.COURSE_CAFE width={22} height={22} />}
              {item?.category === PlaceCategoryType.TRAIN && <SVG_IMG.COURSE_TRAIN width={22} height={22} />}
              {item?.category === PlaceCategoryType.POINT_OF_INTEREST && (
                <SVG_IMG.COURSE_CULTURE width={22} height={22} />
              )}
              <CustomText style={styles.selected_icon_text}>{index + 1}</CustomText>
            </View>
            <CustomText style={styles.selected_text}>{item.name}</CustomText>
            {isMoreState ? (
              <CustomTouchable onPress={toggleIsMore} style={styles.more_wrap}>
                <SVG_IMG.MORE width={3} height={15} />
              </CustomTouchable>
            ) : (
              <View />
            )}
          </View>
          {isMore && onPressRemoveCourse && onPressEditCourse && (
            <View style={styles.more_content_wrap}>
              <CustomTouchable onPress={() => onPressRemoveCourse(index)} style={styles.more_content_btn}>
                <SVG_IMG.TRASH width={16} height={16} />
                <CustomText style={[styles.more_content_btn_text, {color: palette.PRIMARY}]}>삭제하기</CustomText>
              </CustomTouchable>
              <CustomTouchable onPress={() => onPressEditCourse(index)} style={styles.more_content_btn}>
                <SVG_IMG.WRITE width={16} height={16} />
                <CustomText style={styles.more_content_btn_text}>수정하기</CustomText>
              </CustomTouchable>
            </View>
          )}
        </CustomTouchable>

        {courseConectList.length !== 0 && courseConectList[index] && (
          <View style={styles.connect_wrap}>
            <SVG_IMG.CONNECT_BORDER />
            <CustomTouchable onPress={onPressLoadMap} style={styles.connect_btn_wrap}>
              <SVG_IMG.KAKAO_MAP width={24} height={24} />
              <CustomText style={styles.connect_btn_text}>카카오 맵에서 길찾기</CustomText>
            </CustomTouchable>
          </View>
        )}
      </>
    );
  },
);
export default memo(Course);
