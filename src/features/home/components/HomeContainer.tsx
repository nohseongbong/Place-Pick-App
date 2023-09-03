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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../shared/constants/navigation';
import CategoryBar from './bottomSheetContents/CategoryBar';

const HomeContainer = observer(() => {
  const styles = style();
  const navigation: NavigationProp<MainStackParamList> = useNavigation();

  const onPressCreateCourse = () => {
    navigation.navigate(SCREEN_NAME.COURSEDETAIL);
  };

  return (
    <View style={styles.container}>
      <CategoryBar />
      <HomeMap />
      <HomeBottomSheet />
      {courseStore.courseList.length > 1 &&
        bottomSheetStore.focusedType === FocusedType.CREATE &&
        bottomSheetStore.bottomSheetIndex !== 0 && (
          <CustomTouchable onPress={onPressCreateCourse} style={styles.complete_course_wrap}>
            <CustomText style={styles.complete_course_text}>코스 완성하기</CustomText>
          </CustomTouchable>
        )}
    </View>
  );
});

export default HomeContainer;
