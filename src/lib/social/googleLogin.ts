import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const handleGoogleLogin = async () => {
  GoogleSignin.configure({webClientId: '667768264255-v5v5ipdpaleo3rib40nboldvep7k5n8p.apps.googleusercontent.com'});
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signIn();
    const {accessToken, idToken} = await GoogleSignin.getTokens();
    console.log(idToken, ': 구글 로그인 idToken ');
    console.log(accessToken, ': 구글 로그인 ');
  } catch (error) {
    console.log(error, ' : 구글 로그인 에러');
  }
};
