import React, {memo, useEffect, useRef} from 'react';
import {TextInput, View} from 'react-native';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {observer} from 'mobx-react-lite';
import {SVG_IMG} from '../../../../assets/images';
import style from '../../styles/CollectionPlaceSearchStyle';
import CustomTextInput from '../../../../shared/components/customComponents/CustomTextInput';
import {collectionSearchStore} from '../../store/collectionSearchStore';
import {PlaceType} from '../../../../shared/types/place/placeType';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {isBlank} from '../../../../lib/lodash';
import {CategoryIconView} from '../../../../shared/components/category-icon/CategoryIcon';
import {tabList} from '../../../home/constants/searchTabType';
import {collectionDetailStore} from '../../store/collectionDetailStore';

const CollectionPlaceSearch = observer(() => {
  const styles = style();
  const searchRef = useRef<TextInput>(null);

  const onFocus = () => {
    collectionSearchStore.setIsFocusSearch(true);
  };
  const onBlur = () => {
    collectionSearchStore.setIsFocusSearch(false);
  };

  const onPressRemoveSearchText = () => {
    collectionSearchStore.setSearchText('');
  };

  const onPressCancleSearch = () => {
    collectionDetailStore.setIsSearch(false);
  };

  const SearchListItem = memo(({place}: {place: PlaceType}) => {
    const onPressPlace = () => {
      collectionDetailStore.setEditCourseList(place);
    };

    return (
      <CustomTouchable onPress={onPressPlace} style={styles.item}>
        <View style={styles.item_img_wrap}>
          <CategoryIconView type={place.category} width={36} />
        </View>
        <View style={styles.item_info_wrap}>
          <CustomText style={styles.item_name}>{place.name}</CustomText>
          <View style={styles.item_adress}>
            <CustomText style={styles.item_text}>
              {place.formatted_address}
            </CustomText>
          </View>
          <View style={styles.item_rating}>
            <SVG_IMG.STAR width={10} height={10} />
            <CustomText style={styles.item_rating_text}>
              {place.rating ?? 0}
            </CustomText>
            <SVG_IMG.PEOPLE width={12} height={8} />
            <CustomText style={styles.item_rating_text}>
              {place.user_ratings_total ?? 0}
            </CustomText>
          </View>
        </View>
      </CustomTouchable>
    );
  });
  const TabComponent = observer(({item}: {item: string}) => {
    const onPressTab = () => {
      collectionSearchStore.setActiveTab(item);
    };
    return (
      <CustomTouchable
        onPress={onPressTab}
        style={[
          styles.tab,
          collectionSearchStore.activeTab === item && styles.active_tab,
        ]}>
        <CustomText
          style={[
            styles.tab_text,
            collectionSearchStore.activeTab === item && styles.active_tab_text,
          ]}>
          {item}
        </CustomText>
      </CustomTouchable>
    );
  });

  useEffect(() => {
    return () => {
      collectionSearchStore.resetSearch();
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
            placeholder="검색"
            onSubmitEditing={collectionSearchStore.fetchGoogleSearchPlace}
            value={collectionSearchStore.searchText}
            onChangeText={collectionSearchStore.setSearchText}
          />
          <CustomTouchable
            onPress={onPressRemoveSearchText}
            style={styles.search_remove_btn}>
            <SVG_IMG.SEARCH_REMOVE width={16} height={16} />
          </CustomTouchable>
        </View>
        <CustomTouchable onPress={onPressCancleSearch} style={styles.close_btn}>
          <CustomText style={styles.close_text}>취소</CustomText>
        </CustomTouchable>
      </View>
      {collectionSearchStore.searchList.length !== 0 && (
        <View style={styles.tab_wrap}>
          {tabList.map((item, index) => {
            return <TabComponent key={`${item}_${index}`} item={item} />;
          })}
        </View>
      )}

      {isBlank(collectionSearchStore.searchText) ? (
        <View style={styles.not_search_wrap}>
          <SVG_IMG.PLACE_ICON width={26} height={32} />
          <CustomText style={[styles.not_search_text, {marginTop: 10}]}>
            가고싶은 곳을
          </CustomText>
          <CustomText style={styles.not_search_text}>
            자유롭게 검색해보세요!
          </CustomText>
        </View>
      ) : (
        <BottomSheetScrollView contentContainerStyle={styles.list_wrap}>
          {collectionSearchStore.searchList.map(item => {
            return <SearchListItem place={item} key={item.place_id} />;
          })}
        </BottomSheetScrollView>
      )}
    </View>
  );
});

export default CollectionPlaceSearch;
