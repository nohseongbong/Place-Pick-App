import React from 'react';
import Swiper from 'react-native-swiper';
import {Image, View} from 'react-native';

import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/onboardingContainerStyle';
import {ON_BOARDING_LIST} from '../constants/onBoarding.const';
import {SVG_IMG} from '../../../assets/images';
import {wt} from '../../../lib/responsiveSize';
import {palette} from '../../../shared/constants/palette';
import OnboardingButtons from './OnboardingButtons';

const OnboardingContainer = () => {
  const styles = style();

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
      <OnboardingButtons />
    </View>
  );
};

export default OnboardingContainer;
