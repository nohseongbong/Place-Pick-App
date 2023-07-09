import React, {memo} from 'react';
import {View} from 'react-native';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../../styles/courseListItem';
import {CategoryIconView} from '../../../../shared/components/category-icon/CategoryIcon';

interface Props {
  model: any;
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

const CourseListItem = ({model}: Props) => {
  return (
    <CustomTouchable style={styles.container}>
      <CustomText style={styles.course_title_text}>{model.name}</CustomText>
      <View style={styles.place_list_wrap}>
        {model.place_list.map((item: any, index: number) => (
          <Place key={`${item.place_id}_${index}`} item={item} />
        ))}
      </View>
      <View />
    </CustomTouchable>
  );
};

export default memo(CourseListItem);
