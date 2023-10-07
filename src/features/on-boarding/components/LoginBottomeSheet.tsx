import React, {useCallback, useMemo, useState} from 'react';
import {View} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {observer} from 'mobx-react-lite';

import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/loginBottomSheetStyle';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {SVG_IMG} from '../../../assets/images';
import {wt} from '../../../lib/responsiveSize';
import {handleAppleLogin} from '../../../lib/social/appleLogin';
import {handleGoogleLogin} from '../../../lib/social/googleLogin';

interface Props {
  sheetRef: React.RefObject<BottomSheetModal>;
  action: () => void;
}

const LoginBottomSheet = observer(({sheetRef, action}: Props) => {
  const styles = style();

  const [backdropPressBehavior, setBackdropPressBehavior] = useState<
    'none' | 'close' | 'collapse'
  >('collapse');
  // ref

  // variables
  const snapPoints = useMemo(() => ['1%', '30%'], []);

  const onPressAppleLogin = () => {
    handleAppleLogin();
  };
  const onPressGoogleLogin = async () => {
    try {
      await handleGoogleLogin({action: action});
    } catch (error) {}
  };

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />
    ),
    [backdropPressBehavior],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      sheetRef.current?.forceClose();
      setBackdropPressBehavior('close');
    }
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={sheetRef}
        index={1}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}>
        <View style={styles.container}>
          <CustomText style={styles.title}>로그인</CustomText>
          <View style={styles.login_btn_wrap}>
            <CustomTouchable onPress={onPressGoogleLogin} style={styles.btn}>
              <SVG_IMG.GOOGLE_ICON width={wt(24)} height={wt(24)} />
              <CustomText style={[styles.btn_text]}>
                Google로 시작하기
              </CustomText>
            </CustomTouchable>
            <CustomTouchable
              onPress={onPressAppleLogin}
              style={[styles.btn, styles.apple_btn]}>
              <SVG_IMG.APPLE_ICON width={wt(24)} height={wt(24)} />
              <CustomText style={[styles.btn_text, styles.apple_text]}>
                Apple로 시작하기
              </CustomText>
            </CustomTouchable>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default LoginBottomSheet;
