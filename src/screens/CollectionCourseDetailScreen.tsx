import React, {useEffect} from 'react';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {observer} from 'mobx-react-lite';

import BackPressHeader from '../shared/components/header/components/BackPressHeader';
import BottomSheetBackGround from '../shared/components/background/BottomSheetBackGround';
import CreateCourseNameModal from '../shared/components/bottomSheet/CreateCourseNameModal';
import CollectionCourseDetailContainer from '../features/collection/components/collection-detail/CollectionCourseDetailContainer';
import {collectionDetailStore} from '../features/collection/store/collectionDetailStore';

const CollectionCourseDetailScreen = observer(() => {
  const onPressCompleteCourseName = () => {
    collectionDetailStore.fetchModifyCourseDetail();
    collectionDetailStore.setIsCourseNameModal(false);
    Keyboard.dismiss();
  };

  const onPressBackGround = () => {
    Keyboard.dismiss();
    collectionDetailStore.setIsCourseNameModal(false);
  };

  useEffect(() => {
    return () => {
      collectionDetailStore.resetCourseDetail();
    };
  }, []);

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, width: '100%', height: '100%'}} behavior="position">
        <BackPressHeader />
        <CollectionCourseDetailContainer />
        {collectionDetailStore.isCourseNameModal && <BottomSheetBackGround onPress={onPressBackGround} />}
        <CreateCourseNameModal
          isState={collectionDetailStore.isCourseNameModal}
          setIsState={collectionDetailStore.setIsCourseNameModal}
          value={collectionDetailStore.courseName}
          setValue={collectionDetailStore.setCourseName}
          complete={onPressCompleteCourseName}
        />
      </KeyboardAvoidingView>
    </>
  );
});

export default CollectionCourseDetailScreen;
