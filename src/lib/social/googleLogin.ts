import {GOOGLE_LOGIN_AOS_CLIENT_ID, GOOGLE_LOGIN_IOS_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Platform} from 'react-native';

export const handleGoogleLogin = async () => {
  const clientId = Platform.OS === 'android' ? GOOGLE_LOGIN_AOS_CLIENT_ID : GOOGLE_LOGIN_IOS_CLIENT_ID;
  GoogleSignin.configure({webClientId: clientId});
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signIn();
    const data = await GoogleSignin.getTokens();
    console.log(data, ': 구글 로그인 idToken ');
  } catch (error) {
    console.log(error, ' : 구글 로그인 에러');
  }
};
