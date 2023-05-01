import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import style from '../../styles/placeDetailStyle';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {homeStore} from '../../store/homeStore';
import {observer} from 'mobx-react-lite';

const PlaceDetail = observer(() => {
  const store = homeStore;
  const styles = style();

  const onPressHidePlaceDetail = () => {
    store.setIsDetailFocused(false);
  };

  return (
    <View style={styles.container}>
      <CustomTouchable onPress={onPressHidePlaceDetail}>
        <CustomText>x</CustomText>
      </CustomTouchable>
      <CustomText>디테일 페이지</CustomText>
    </View>
  );
});

export default PlaceDetail;
