import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
interface CustomToastProps {
  message: string;
  visible: boolean;
}

const CustomToast = ({message, visible}: CustomToastProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [fadeAnim, visible]);

  return (
    <>
      {visible && (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomToast;
