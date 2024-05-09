import {View} from 'react-native';
import KakaoShareLink from 'react-native-kakao-share-link';

// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';
import SvgComponent from '../svg-component/SvgComponent';

// styles
import buttonStyle from './button.style';
import shadowStyle from '../../styles/shadow';

function KakaoShareButton() {
  const onPressShare = async () => {
    try {
      const response = await KakaoShareLink.sendFeed({
        content: {
          title: '노성봉님께서 데이트 코스를 공유했습니다.',
          imageUrl:
            'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
          link: {
            webUrl: 'placepick://',
            mobileWebUrl: 'placepick://',
          },
          description: '',
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              androidExecutionParams: [
                {
                  key: 'courseId',
                  value: '',
                },
              ],
              iosExecutionParams: [
                {
                  key: 'courseId',
                  value: '',
                },
              ],
            },
          },
        ],
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CustomTouchable
      style={[buttonStyle.container, buttonStyle.kakao_wrap, shadowStyle.shdow]}
      onPress={onPressShare}>
      <View style={[buttonStyle.icon_wrap]}>
        <SvgComponent icon={'kakao'} />
      </View>
      <CustomText fs="Body" fw="Bold" color={'basic'} theme={'body'}>
        카카오톡 공유하기
      </CustomText>
    </CustomTouchable>
  );
}

export default KakaoShareButton;
