import {useCallback, useEffect, useRef} from 'react';
import {View} from 'react-native';

import style from '../styles/homeContainerStyle';
import HomeMap from './HomeMap';
import HomeBottomSheet from './HomeBottomSheet';
import {observer} from 'mobx-react-lite';
import {courseStore} from '../store/courseStore';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {bottomSheetStore} from '../store/bottomSheetStore';
import {FocusedType} from '../constants/bottomSheetFocusedType';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  MainStackParamList,
  TabStackParamList,
} from '../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import CategoryBar from './bottomSheetContents/CategoryBar';
import {authStore} from '../../../shared/store/authStore';
import LoginBottomSheet from '../../on-boarding/components/LoginBottomeSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const HomeContainer = observer(() => {
  const styles = style();
  const navigation: NavigationProp<MainStackParamList> = useNavigation();
  const navigationTab: NavigationProp<TabStackParamList> = useNavigation();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const onPressCreateCourse = () => {
    if (!authStore.accessToken) {
      authStore.setIsLoginModal(true);
      return;
    }
    navigation.navigate(SCREEN_NAME.COURSEDETAIL);
  };

  const loginAction = () => {
    bottomSheetRef.current?.close();
    navigationTab.navigate(SCREEN_NAME.COLLECTION);
  };

  useFocusEffect(
    useCallback(() => {
      authStore.fetchUserInfo();
    }, []),
  );

  useEffect(() => {
    if (authStore.isLoginModal) {
      bottomSheetRef.current?.present();
    }
  }, [authStore.isLoginModal]);

  return (
    <View style={styles.container}>
      <CategoryBar />
      <HomeMap />
      <HomeBottomSheet />
      {courseStore.courseList.length > 1 &&
        bottomSheetStore.focusedType === FocusedType.CREATE &&
        bottomSheetStore.bottomSheetIndex !== 0 &&
        !authStore.isLoginModal && (
          <CustomTouchable
            onPress={onPressCreateCourse}
            style={styles.complete_course_wrap}>
            <CustomText style={styles.complete_course_text}>
              코스 완성하기
            </CustomText>
          </CustomTouchable>
        )}
      <LoginBottomSheet sheetRef={bottomSheetRef} action={loginAction} />
    </View>
  );
});

export default HomeContainer;
