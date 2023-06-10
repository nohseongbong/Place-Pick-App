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
