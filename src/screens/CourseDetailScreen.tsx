import React, {useEffect, useState} from 'react';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {observer} from 'mobx-react-lite';

import CourseDetailContainer from '../features/create-course/components/CourseDetailContainer';
import {courseDetailStore} from '../features/create-course/store/CourseDetailStore';
import Complete from '../shared/components/complete/Complete';
import BackPressHeader from '../shared/components/header/components/BackPressHeader';
import BottomSheetBackGround from '../shared/components/background/BottomSheetBackGround';
import CreateCourseNameModal from '../shared/components/bottomSheet/CreateCourseNameModal';
import CompletionCourseModal from '../shared/components/custom-modal/CompletionCourseModal';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../shared/constants/navigation';

const CourseDetailScreen = observer(() => {
  const navigation: NavigationProp<TabStackParamList> = useNavigation();
  const [isModal, setIsModal] = useState<boolean>(false);

  const complete = () => {
    courseDetailStore.fetchCreateCourse(successModal);
  };

  const successModal = () => {
    setIsModal(true);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  const onPressBackGround = () => {
    Keyboard.dismiss();
    courseDetailStore.setIsCourseNameModal(false);
  };

  const onPressSeeCourse = () => {
    navigation.navigate(SCREEN_NAME.COLLECTION);
  };

  useEffect(() => {
    return () => {
      courseDetailStore.resetCourseDetail();
    };
  }, []);

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
          complete={complete}
        />
      </KeyboardAvoidingView>
      <CompletionCourseModal isVisible={isModal} onPress={onPressSeeCourse} onClose={onCloseModal} />
    </>
  );
});

export default CourseDetailScreen;
