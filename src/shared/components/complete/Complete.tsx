import React from 'react';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import style from './styles/completeStyle';
import {courseDetailStore} from '../../../features/create-course/store/CourseDetailStore';

const Complete = observer(() => {
  const styles = style();

  const onPressComplete = () => {
    courseDetailStore.setIsCourseNameModal(true);
  };
  return (
    <CustomTouchable
      onPress={onPressComplete}
      style={styles.complete_course_wrap}>
      <CustomText style={styles.complete_course_text}>저장하기</CustomText>
    </CustomTouchable>
  );
});

export default Complete;
