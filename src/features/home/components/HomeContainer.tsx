import React, {useCallback, useMemo, useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import style from '../styles/homeContainerStyle';
import HomeMap from './HomeMap';
import HomeBottomSheet from './HomeBottomSheet';

const HomeContainer = () => {
  const styles = style();

  return (
    <View style={styles.container}>
      <HomeMap />
      <HomeBottomSheet />
    </View>
  );
};

export default HomeContainer;
