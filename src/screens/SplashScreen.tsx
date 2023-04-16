import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/pramsType';
import {NANIGATOR_NAME, SCREEN_NAME} from '../constants/navigation';
import {palette} from '../constants/palette';
import CustomText from '../components/customComponents/CustomText';

export type SplashScreenProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAME.SPLASH>;

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.reset({routes: [{name: NANIGATOR_NAME.MAIN}]});
      }, 2000);
    }, []),
  );

  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>스플래시 화면</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: palette.BACKGROUND,
  },
  text: {
    color: palette.PRIMARY,
  },
});

export default SplashScreen;
