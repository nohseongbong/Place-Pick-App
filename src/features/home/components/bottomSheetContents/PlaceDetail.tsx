import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import style from '../../styles/placeDetailStyle';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {placeDetailStore} from '../../store/placeDetailStore';

const PlaceDetail = observer(() => {
  const store = placeDetailStore;
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
