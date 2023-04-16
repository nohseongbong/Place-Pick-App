import React from 'react';
import {SafeAreaView as RNSafe, Platform, StyleSheet} from 'react-native';
import {SafeAreaView as ContextSafe} from 'react-native-safe-area-context';
import {palette} from '../../constants/palette';

const CustomSafeAreaView = ({children, style, ...props}: any) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.BACKGROUND,
    },
  });

  return (
    <>
      {Platform.OS === 'android' ? (
        <ContextSafe style={[styles.container, style]} {...props}>
          {children}
        </ContextSafe>
      ) : (
        <RNSafe style={[styles.container, style]} {...props}>
          {children}
        </RNSafe>
      )}
    </>
  );
};

export default CustomSafeAreaView;
