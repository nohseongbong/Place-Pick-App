import React from 'react';
import {View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import {SVG_IMG} from '../../../../assets/images';
import style from '../styles/userInfoStyle';

const UserInfo = () => {
  const styles = style();

  return (
    <>
      <CustomText style={styles.title}>내 정보</CustomText>
      <View style={styles.container}>
        <View style={styles.content_wrap}>
          <CustomText style={styles.content_text}>이름</CustomText>
          <CustomText style={styles.content_text}>노성봉</CustomText>
        </View>
        <View style={styles.content_wrap}>
          <CustomText style={styles.content_text}>이메일 주소</CustomText>
          <CustomText style={styles.content_text}>shtjdqhd@naver.com</CustomText>
        </View>
        <View style={[styles.content_wrap, {borderBottomWidth: 0}]}>
          <CustomText style={styles.content_text}>가입 방법</CustomText>
          <View style={styles.social_wrap}>
            <SVG_IMG.GOOGLE_ICON />
            <CustomText style={styles.content_text}>Google</CustomText>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserInfo;
