import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {observer} from 'mobx-react-lite';
import KakaoShareLink from 'react-native-kakao-share-link';

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
import {courseStore} from '../features/home/store/courseStore';

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
    navigation.goBack();
    setIsModal(false);
  };

  const onPressBackGround = () => {
    Keyboard.dismiss();
    courseDetailStore.setIsCourseNameModal(false);
  };

  const onPressSeeCourse = () => {
    navigation.navigate(SCREEN_NAME.COLLECTION);
  };

  const onPressShare = useCallback(async () => {
    try {
      const response = await KakaoShareLink.sendFeed({
        content: {
          title: '노성봉님께서 데이트 코스를 공유했습니다.',
          imageUrl: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
          link: {
            webUrl: 'placepick://',
            mobileWebUrl: 'placepick://',
          },
          description: courseDetailStore.courseName,
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              androidExecutionParams: [{key: 'courseId', value: '60'}],
              iosExecutionParams: [{key: 'courseId', value: '60'}],
            },
          },
        ],
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    return () => {
      courseDetailStore.resetCourseDetail();
      courseStore.resetCourse();
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
      <CompletionCourseModal
        isVisible={isModal}
        onPress={onPressSeeCourse}
        onClose={onCloseModal}
        onPressShare={onPressShare}
      />
    </>
  );
});

export default CourseDetailScreen;
