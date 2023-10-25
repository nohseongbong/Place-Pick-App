import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';

import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/onboardingButtonsStyle';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {STACK_NAME} from '../../../shared/constants/navigation';

interface Props {
  onPress: () => void;
}

const OnboardingButtons = ({onPress}: Props) => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const onPressGuestMode = () => {
    navigation.reset({routes: [{name: STACK_NAME.MAIN}]});
  };

  return (
    <View style={styles.container}>
      <CustomText onPress={onPressGuestMode} style={[styles.text]}>
        서비스 둘러보기
      </CustomText>
      <CustomTouchable
        onPress={onPress}
        style={[styles.button_wrap, styles.button_start_wrap]}>
        <CustomText style={[styles.text, styles.start_text]}>
          시작하기
        </CustomText>
      </CustomTouchable>
    </View>
  );
};

export default OnboardingButtons;
