import Toast from 'react-native-toast-message';
import {ht} from '../responsiveSize';

export const showPlacePickToast = () => {
  Toast.show({
    type: 'placePick',
    text1: '장소를 선택했습니다',
    visibilityTime: 2000,
    autoHide: true,
    position: 'bottom',
    bottomOffset: ht(80),
  });
};

export const showPlaceRemoveToast = () => {
  Toast.show({
    type: 'placeRemove',
    text1: '장소를 삭제했습니다',
    visibilityTime: 2000,
    autoHide: true,
    position: 'bottom',
    bottomOffset: ht(80),
  });
};

export const showCourseRemoveToast = () => {
  Toast.show({
    type: 'courseRemove',
    text1: '코스를 삭제했습니다',
    visibilityTime: 2000,
    autoHide: true,
    position: 'bottom',
    bottomOffset: ht(80),
  });
};

export const showCourseNameUpdateToast = () => {
  Toast.show({
    type: 'courseNameUpdate',
    text1: '코스 이름을 수정했습니다',
    visibilityTime: 2000,
    autoHide: true,
    position: 'bottom',
    bottomOffset: ht(80),
  });
};
