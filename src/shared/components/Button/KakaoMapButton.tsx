import {Linking, Platform, View} from 'react-native';

// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';
import SvgComponent from '../svg-component/SvgComponent';

// styles
import buttonStyle from './button.style';

// types
import {CourseType} from '../../types/place/placeType';

interface Props {
  item?: CourseType;
}

function KakaoMapButton({}: Props) {
  const onPressLoadMap = async () => {
    // const start = item;
    await Linking.openURL('')
      // `kakaomap://route?sp=${start.location.latitude},${start.location.longitude}&ep=${end.location.latitude},${end.location.longitude}&by=FOOT`,
      .then(res => {
        console.log(res, '  : loadMap ');
      })
      .catch(err => {
        if (Platform.OS === 'android') {
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=net.daum.android.map&hl=ko-KR',
          );
        } else {
          Linking.openURL(
            'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-no-1-%EC%A7%80%EB%8F%84%EC%95%B1/id304608425',
          );
        }
        console.log(err, '  : err ');
      });
  };

  return (
    <CustomTouchable
      style={[buttonStyle.container, buttonStyle.kakao_map_wrap]}
      onPress={onPressLoadMap}>
      <View style={[buttonStyle.icon_wrap]}>
        <SvgComponent width={20} height={20} icon={'kakao_map'} />
      </View>
      <CustomText fs="Callout" fw="Regular" color={'gray'} theme={'body'}>
        카카오 맵에서 길찾기
      </CustomText>
    </CustomTouchable>
  );
}

export default KakaoMapButton;
