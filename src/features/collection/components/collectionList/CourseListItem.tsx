import React, {memo, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../../styles/courseListItem';
import {CategoryIconView} from '../../../../shared/components/category-icon/CategoryIcon';
import {SVG_IMG} from '../../../../assets/images';
import {wt} from '../../../../lib/responsiveSize';
import {collectionStore} from '../../store/collectionStore';

interface Props {
  model: any;
  index: number;
}
const styles = style();

const Place = memo(({item}: any) => {
  return (
    <View style={styles.place_list_wrap}>
      <CategoryIconView type={item.category} width={16} />
      <CustomText style={styles.place_item_text}>{item.name}</CustomText>
    </View>
  );
});

const CourseListItem = observer(({model, index}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onPressCourse = () => {
    if (collectionStore.isEdit) {
      if (isChecked) {
        collectionStore.removeSelectCourse(index);
      } else {
        collectionStore.addSelectCourse(model);
      }

      setIsChecked(!isChecked);
    } else {
    }
  };

  return (
    <CustomTouchable onPress={onPressCourse} style={styles.container}>
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
        {model.place_list.map((item: any, idx: number) => (
          <Place key={`${item.place_id}_${idx}`} item={item} />
        ))}
      </View>
      <View />
    </CustomTouchable>
  );
});

export default memo(CourseListItem);
