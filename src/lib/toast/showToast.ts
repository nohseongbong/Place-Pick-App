import Toast from 'react-native-toast-message';

export const showPlacePickToast = () => {
  Toast.show({
    type: 'placePick',
    text1: '장소를 선택했습니다',
    visibilityTime: 2000,
    autoHide: true,
    position: 'bottom',
    bottomOffset: 60,
  });
};
