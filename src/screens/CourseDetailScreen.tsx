import React from 'react';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {observer} from 'mobx-react-lite';

import CourseDetailContainer from '../features/create-course/components/CourseDetailContainer';
import {courseDetailStore} from '../features/create-course/store/CourseDetailStore';
import Complete from '../shared/components/complete/Complete';
import BackPressHeader from '../shared/components/header/components/BackPressHeader';
import BottomSheetBackGround from '../shared/components/background/BottomSheetBackGround';
import CreateCourseNameModal from '../shared/components/bottomSheet/CreateCourseNameModal';

const CourseDetailScreen = observer(() => {
  const onPressBackGround = () => {
    Keyboard.dismiss();
    courseDetailStore.setIsCourseNameModal(false);
  };

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, width: '100%', height: '100%'}} behavior="position">
        <BackPressHeader />
        <CourseDetailContainer />
        {courseDetailStore.isCourseNameModal ? <BottomSheetBackGround onPress={onPressBackGround} /> : <Complete />}
        <CreateCourseNameModal
          isState={courseDetailStore.isCourseNameModal}
          setIsState={courseDetailStore.setIsCourseNameModal}
          value={courseDetailStore.courseName}
          setValue={courseDetailStore.setCourseName}
        />
      </KeyboardAvoidingView>
    </>
  );
});

export default CourseDetailScreen;
