import Toast from 'react-native-toast-message';

export const iosToast = () => {
  Toast.show({
    text1: 'Custom Toast',
    position: 'bottom',
    type: 'success',
    visibilityTime: 2000, // 토스트 메시지가 표시되는 시간 (밀리초)
    autoHide: true, // 자동으로 사라지는지 여부
  });
};
