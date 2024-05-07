import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Linking} from 'react-native';
import {RootStackParamList} from '../types/navigation/paramsType';
import {SCREEN_NAME, STACK_NAME} from '../constants/navigation';
import {collectionDetailStore} from '../../features/collection/store/collectionDetailStore';

const useUrlScheme = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const getParameterByName = (url: string) => {
    let inx = url.split('?courseId=');
    if (inx[1]) {
      collectionDetailStore.fetchGetCourseDetail(Number(inx[1]));
      navigation.navigate(STACK_NAME.MAIN, {
        screen: SCREEN_NAME.COLLECTIONCOURSEDETAIL,
      });
    }
  };
  useEffect(() => {
    const handleDeepLink = () => {
      Linking.getInitialURL().then(res => {
        //앱이 실행되지 않은 상태에서 요청이 왔을 때
        if (res) {
          console.log(res, '앱이 꺼져있을 때');
          getParameterByName(res);
        }
      });
      Linking.addEventListener('url', e => {
        // 앱이 실행되어있는 상태에서 요청이 왔을 때 처리하는 이벤트 등록
        if (e) {
          console.log(e.url, '앱이 켜져있을 때');
          getParameterByName(e.url);
        }
      });
    };

    Linking.addEventListener('url', handleDeepLink);
  }, []);
};

export default useUrlScheme;
