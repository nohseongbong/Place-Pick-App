import React, {useEffect, useRef} from 'react';
import {TextInput, View} from 'react-native';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/placeSearchStyle';
import CustomTextInput from '../../../../shared/components/customComponents/CustomTextInput';
import {searchStore} from '../../store/searchStore';
import {courseStore} from '../../store/courseStore';

const PlaceSearch = observer(() => {
  const styles = style();
  const searchRef = useRef<TextInput>(null);

  const onFocus = () => {
    searchStore.setIsFocusSearch(true);
  };
  const onBlur = () => {
    searchStore.setIsFocusSearch(false);
  };

  useEffect(() => {
    return () => {
      searchStore.resetSearch();
      courseStore.resetSelectedCourse();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search_bar_wrap}>
        <View style={styles.search_text_wrap}>
          <CustomTouchable style={styles.search_btn}>
            <SVG_IMG.SEARCH width={16} height={16} />
          </CustomTouchable>
          <CustomTextInput
            onFocus={onFocus}
            onBlur={onBlur}
            refProp={searchRef}
            style={styles.search_input}
            keyboardType="web-search"
            placeholder="가고 싶은 장소를 검색해보세요"
            onSubmitEditing={searchStore.fetchGoogleSearchPlace}
            value={searchStore.searchText}
            onChangeText={searchStore.setSearchText}
          />
        </View>
      </View>
    </View>
  );
});

export default PlaceSearch;
