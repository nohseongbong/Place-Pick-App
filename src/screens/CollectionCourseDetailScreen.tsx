import React, {useCallback, useEffect} from 'react';
import {Keyboard, KeyboardAvoidingView, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import KakaoShareLink from 'react-native-kakao-share-link';

import BackPressHeader from '../shared/components/header/components/BackPressHeader';
import BottomSheetBackGround from '../shared/components/background/BottomSheetBackGround';
import CreateCourseNameModal from '../shared/components/bottomSheet/CreateCourseNameModal';
import CollectionCourseDetailContainer from '../features/collection/components/collection-detail/CollectionCourseDetailContainer';
import {collectionDetailStore} from '../features/collection/store/collectionDetailStore';
import SearchBottomSheet from '../features/collection/components/place-search/SearchBottomSheet';
import CustomTouchable from '../shared/components/customComponents/CustomTouchable';
import CustomText from '../shared/components/customComponents/CustomText';
import {fs, ht, wt} from '../lib/responsiveSize';
import {fontWt, palette} from '../shared/constants/palette';
import {SVG_IMG} from '../assets/images';
import {getPlatformStyles} from '../shared/utils/getPlatformStyles';

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
          description: collectionDetailStore.courseName,
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              androidExecutionParams: [{key: 'courseId', value: '61'}],
              iosExecutionParams: [{key: 'courseId', value: '61'}],
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
      collectionDetailStore.resetCourseDetail();
    };
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
      <KeyboardAvoidingView style={{flex: 1, width: '100%', height: '100%'}} behavior={'position'}>
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
      {collectionDetailStore.isSearch && <SearchBottomSheet />}
      <CustomTouchable
        onPress={onPressShare}
        style={{
          paddingHorizontal: wt(23),
          paddingVertical: ht(12),
          alignItems: 'center',
          backgroundColor: palette.KAKAO,
          borderRadius: 35,
          position: 'absolute',
          bottom: ht(25),
          zIndex: 100,
          flexDirection: 'row',
          gap: 8,
          ...getPlatformStyles,
        }}>
        <SVG_IMG.KAKAO_ICON width={20} height={20} />
        <CustomText style={{color: palette.TEXT, fontSize: fs(14), fontFamily: fontWt.Medium}}>
          카카오톡 공유하기
        </CustomText>
      </CustomTouchable>
    </View>
  );
});

export default CollectionCourseDetailScreen;
