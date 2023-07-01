import React from 'react';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';
import style from './styles/completeStyle';
import {observer} from 'mobx-react-lite';
import {courseDetailStore} from '../../../features/create-course/store/CourseDetailStore';

const Complete = observer(() => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const onPressComplete = () => {
    courseDetailStore.setIsCourseNameModal(true);
  };
  return (
    <CustomTouchable onPress={onPressComplete} style={styles.complete_course_wrap}>
      <CustomText style={styles.complete_course_text}>저장하기</CustomText>
    </CustomTouchable>
  );
});

export default Complete;
