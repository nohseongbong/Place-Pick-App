import React, {useEffect, useRef} from 'react';
import Swiper from 'react-native-swiper';
import {Image, View} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {GOOGLE_LOGIN_AOS_CLIENT_ID, GOOGLE_LOGIN_IOS_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/onboardingContainerStyle';
import {ON_BOARDING_LIST} from '../constants/onBoarding.const';
import {SVG_IMG} from '../../../assets/images';
import {wt} from '../../../lib/responsiveSize';
import {palette} from '../../../shared/constants/palette';
import OnboardingButtons from './OnboardingButtons';
import LoginBottomSheet from './LoginBottomeSheet';

const OnboardingContainer = () => {
  const styles = style();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const onPressStart = () => {
    bottomSheetRef.current?.present();
  };

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: GOOGLE_LOGIN_IOS_CLIENT_ID,
      webClientId: GOOGLE_LOGIN_AOS_CLIENT_ID,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo_wrap}>
        <SVG_IMG.LOGO width={wt(23)} height={wt(23)} />
      </View>
      <Swiper
        paginationStyle={styles.swiper_pagination}
        dotColor={palette.SUB_BORDER}
        activeDotColor={palette.PRIMARY}
        loop={false}
        style={styles.swiper_wrap}>
        {ON_BOARDING_LIST.map((item, index) => {
          return (
            <View style={styles.list_wrap} key={`${index}_item`}>
              <CustomText style={styles.text} numberOfLines={2}>
                {item.text}
                <CustomText style={styles.highlightText}>{item.highlight}</CustomText>
                {item.remainder}
              </CustomText>
              <Image style={styles.image} source={item.image} resizeMode="contain" />
            </View>
          );
        })}
      </Swiper>
      <OnboardingButtons onPress={onPressStart} />
      <LoginBottomSheet sheetRef={bottomSheetRef} />
    </View>
  );
};

export default OnboardingContainer;
