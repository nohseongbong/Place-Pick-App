import {Platform} from 'react-native';
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';

import uuid from 'react-native-uuid';
import {APPLE_LOGIN_CLIENT_ID, APPLE_LOGIN_REFIRECT_URL} from '@env';

export const handleAppleLogin = async () => {
  if (Platform.OS === 'ios') {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );
      console.log(appleAuthRequestResponse, ': ios - apple login');
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const {identityToken} = appleAuthRequestResponse;
        if (!identityToken || !appleAuthRequestResponse.authorizationCode) {
          return;
        }
      }
    } catch (error: any) {
      if (error?.code === appleAuth.Error.CANCELED) {
        console.log(error);
      } else {
      }
    }
    return;
  }
  //android
  const rawNonce = uuid.v4();
  const state = uuid.v4();

  try {
    // Initialize the module
    appleAuthAndroid.configure({
      clientId: APPLE_LOGIN_CLIENT_ID,
      redirectUri: APPLE_LOGIN_REFIRECT_URL,
      responseType: appleAuthAndroid.ResponseType.ALL,
      scope: appleAuthAndroid.Scope.ALL,
      nonce: String(rawNonce),
      state: String(state),
    });

    const response = await appleAuthAndroid.signIn();
    if (response) {
      const code = response.code;
      console.log(code, ': andorid - apple login');
    }
  } catch (error: any) {
    if (error && error.message) {
      switch (error?.message) {
        case appleAuthAndroid.Error.NOT_CONFIGURED:
          console.log('appleAuthAndroid not configured yet.');
          break;
        case appleAuthAndroid.Error.SIGNIN_FAILED:
          console.log('Apple signin failed.');
          break;
        case appleAuthAndroid.Error.SIGNIN_CANCELLED:
          console.log('User cancelled Apple signin.');
          break;
        default:
          break;
      }
    }
  }
};
