import React from 'react';
import {View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {placeDetailStore} from '../../store/placeDetailStore';
import {bottomSheetStore} from '../../store/bottomSheetStore';
import {SVG_IMG} from '../../../../assets/images';
import {palette} from '../../../../shared/constants/palette';
import style from '../../styles/placeSearchStyle';
import CustomTextInput from '../../../../shared/components/customComponents/CustomTextInput';

const PlaceSearch = observer(() => {
  const styles = style();

  return (
    <View style={styles.container}>
      <View>
        <CustomTextInput />
      </View>
    </View>
  );
});

export default PlaceSearch;
