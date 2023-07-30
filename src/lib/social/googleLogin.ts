import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signIn();
    const {accessToken} = await GoogleSignin.getTokens();
    console.log(accessToken, ': 구글 로그인 ');
  } catch (error) {
    console.log(error, ' : 구글 로그인 에러');
  }
};
