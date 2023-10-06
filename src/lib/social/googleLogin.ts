import {GOOGLE_LOGIN_AOS_CLIENT_ID, GOOGLE_LOGIN_IOS_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Platform} from 'react-native';
import {authStore} from '../../shared/store/authStore';

type Props = {
  action: () => void;
};

export const handleGoogleLogin = async ({action}: Props) => {
  const clientId =
    Platform.OS === 'android'
      ? GOOGLE_LOGIN_AOS_CLIENT_ID
      : GOOGLE_LOGIN_IOS_CLIENT_ID;
  GoogleSignin.configure({webClientId: clientId});
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signIn();
    const data = await GoogleSignin.getTokens();
    authStore.login({token: data.idToken, providerType: 'GOOGLE', action});
  } catch (error) {
    console.log(error, ' : 구글 로그인 에러');
  }
};
