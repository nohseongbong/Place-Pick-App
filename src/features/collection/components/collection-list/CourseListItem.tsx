import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../../styles/courseListItemStyle';
import {CategoryIconView} from '../../../../shared/components/category-icon/CategoryIcon';
import {SVG_IMG} from '../../../../assets/images';
import {wt} from '../../../../lib/responsiveSize';
import {collectionStore} from '../../store/collectionStore';
import {MainStackParamList} from '../../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../../shared/constants/navigation';
import {CourseResType} from '../../../../shared/api/course/types/responseType';
import {collectionDetailStore} from '../../store/collectionDetailStore';

interface Props {
  model: CourseResType;
}

interface PlaceProps {
  item: {
    name: string;
    locationCategory: string;
  };
  index: number;
  last: number;
}

const styles = style();

const Place = memo(({item, index, last}: PlaceProps) => {
  return (
    <View style={styles.place_list_wrap}>
      <CategoryIconView type={item.locationCategory} width={16} />
      <CustomText style={styles.place_item_text}>{item.name}</CustomText>
      {index !== last && <CustomText style={styles.place_item_text}>-</CustomText>}
    </View>
  );
});

const CourseListItem = observer(({model}: Props) => {
  const navigation: NavigationProp<MainStackParamList> = useNavigation();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onPressCourse = () => {
    // 편집 상태
    if (collectionStore.isEdit) {
      if (isChecked) {
        collectionStore.deleteSelectCourse(model.courseId);
      } else {
        collectionStore.addSelectCourse(model);
      }

      setIsChecked(!isChecked);
    } else {
      // 편집 상태가 아닐 때
      collectionDetailStore.fetchGetCourseDetail(model.courseId);
      navigation.navigate(SCREEN_NAME.COLLECTIONCOURSEDETAIL);
    }
  };

  useEffect(() => {
    if (!collectionStore.isEdit) {
      setIsChecked(false);
    }
  }, [collectionStore.isEdit]);

  return (
    <CustomTouchable
      onPress={onPressCourse}
      style={[styles.container, collectionStore.isEdit && isChecked && styles.check_border]}>
      {collectionStore.isEdit && (
        <View style={styles.check_wrap}>
          {isChecked ? (
            <SVG_IMG.CHECK_ON width={wt(24)} height={wt(24)} />
          ) : (
            <SVG_IMG.CHECK_OFF width={wt(24)} height={wt(24)} />
          )}
        </View>
      )}

      <CustomText style={styles.course_title_text}>{model.name}</CustomText>
      <View style={styles.place_list_wrap}>
        {model.locationList.map((item: any, idx: number) => (
          <Place key={`${item.name}_${idx}`} item={item} index={idx} last={model.locationList.length - 1} />
        ))}
      </View>
      <View />
    </CustomTouchable>
  );
});

export default memo(CourseListItem);
