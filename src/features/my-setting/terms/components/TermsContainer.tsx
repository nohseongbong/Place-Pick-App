import {useEffect, useMemo, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import WebView from 'react-native-webview';
import {RouteProp, useRoute} from '@react-navigation/native';

import BackPressTextHeader from '../../../../shared/components/header/components/BackPressTextHeader';
import {MainStackParamList} from '../../../../shared/types/navigation/paramsType';
import {SCREEN_NAME} from '../../../../shared/constants/navigation';
import {LegalType, LegalUri} from '../constants/terms.const';
import style from '../styles/TermsContainerStyle';

const TermsContainer = observer(() => {
  const styles = useMemo(() => style(), []);
  const route = useRoute<RouteProp<MainStackParamList, SCREEN_NAME.TERMS>>();
  const webViewRef: React.RefObject<WebView> = useRef<WebView>(null);
  const [uri, setUri] = useState<string>(LegalUri.TERMS);
  const [title, setTitle] = useState<string>('이용 약관');

  useEffect(() => {
    switch (route.params?.type) {
      case LegalType.TERMS:
        setUri(LegalUri.TERMS);
        setTitle('이용 약관');
        break;
      case LegalType.PRIVACY_POLICY:
        setUri(LegalUri.PRIVACY_POLICY);
        setTitle('개인정보처리방침');
        break;
    }
  }, []);

  return (
    <>
      <BackPressTextHeader text={title} />
      <WebView
        style={styles.container}
        source={{uri}}
        ref={webViewRef}
        javaScriptEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        thirdPartyCookiesEnabled={true}
        allowFileAccess={true}
        scalesPageToFit={true}
        bounces={false}
        overScrollMode={'never'}
        decelerationRate="fast"
        setBuiltInZoomControls={false}
        textZoom={100}
        setDisplayZoomControls={false}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        allowsBackForwardNavigationGestures={true}
        limitsNavigationsToAppBoundDomains={true}
        sharedCookiesEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        originWhitelist={['*']}
      />
    </>
  );
});

export default TermsContainer;
