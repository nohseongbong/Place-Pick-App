import React, {useEffect, useRef} from 'react';
import {Image, TextInput, View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {IMG, SVG_IMG} from '../../../../assets/images';
import style from '../../styles/placeSearchStyle';
import CustomTextInput from '../../../../shared/components/customComponents/CustomTextInput';
import CustomFlatList from '../../../../shared/components/customComponents/CustomFlatList';
import {searchStore} from '../../store/searchStore';
import {tabList} from '../../constants/searchTabType';
import {bottomSheetStore} from '../../store/bottomSheetStore';

const PlaceSearch = observer(() => {
  const styles = style();
  const searchRef = useRef<TextInput>(null);

  const onFocus = () => {
    searchStore.setIsFocusSearch(true);
  };
  const onBlur = () => {
    searchStore.setIsFocusSearch(false);
  };

  const SearchListItem = () => {
    return (
      <CustomTouchable style={styles.item}>
        <View style={styles.item_img_wrap}>
          <SVG_IMG.CATEGORY_RESTAURANT width={36} height={36} />
        </View>
        <View style={styles.item_info_wrap}>
          <CustomText style={styles.item_name}>땀땀</CustomText>
          <View style={styles.item_adress}>
            <CustomText style={styles.item_text}>강남구 역삼동 ·</CustomText>
            <CustomText style={styles.item_text}>카페,디저트</CustomText>
          </View>
          <View style={styles.item_rating}>
            <SVG_IMG.STAR width={10} height={10} />
            <CustomText style={styles.item_rating_text}>4.1</CustomText>
            <SVG_IMG.PEOPLE width={12} height={8} />
            <CustomText style={styles.item_rating_text}>1,212</CustomText>
          </View>
        </View>
      </CustomTouchable>
    );
  };

  const TabComponent = observer(({item}: {item: string}) => {
    const onPressTab = () => {
      searchStore.setActiveTab(item);
    };
    return (
      <CustomTouchable onPress={onPressTab} style={[styles.tab, searchStore.activeTab === item && styles.active_tab]}>
        <CustomText style={[styles.tab_text, searchStore.activeTab === item && styles.active_tab_text]}>
          {item}
        </CustomText>
      </CustomTouchable>
    );
  });

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
            placeholder="검색"
          />
          <CustomTouchable style={styles.search_remove_btn}>
            <SVG_IMG.SEARCH_REMOVE width={16} height={16} />
          </CustomTouchable>
        </View>
        <CustomTouchable style={styles.close_btn}>
          <CustomText style={styles.close_text}>취소</CustomText>
        </CustomTouchable>
      </View>

      <View style={styles.tab_wrap}>
        {tabList.map((item, index) => {
          return <TabComponent key={`${item}_${index}`} item={item} />;
        })}
      </View>
      <CustomFlatList
        style={styles.list_wrap}
        data={searchStore.searchList}
        keyExtractor={item => item.place_id}
        renderItem={() => {
          return <SearchListItem />;
        }}
      />
    </View>
  );
});

export default PlaceSearch;
