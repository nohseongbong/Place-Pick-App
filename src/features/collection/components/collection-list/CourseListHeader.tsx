import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import style from '../../styles/courseListHeaderStyle';
import {collectionStore} from '../../store/collectionStore';

const CourseListHeader = observer(() => {
  const styles = style();

  const onPressEdit = () => {
    collectionStore.setIsEdit(true);
  };
  return (
    <View style={styles.container}>
      <CustomText style={styles.title_text}>내가 만든 코스 {collectionStore.courseList.length}</CustomText>
      {!collectionStore.isEdit && (
        <CustomTouchable onPress={onPressEdit} style={styles.edit_wrap}>
          <CustomText style={styles.edit_text}>편집</CustomText>
        </CustomTouchable>
      )}
    </View>
  );
});

export default CourseListHeader;
