import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {PlaceCategoryType} from '../../../../shared/constants/placeCategoryType';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import {fontWt, palette} from '../../../../shared/constants/palette';
import style from '../../styles/categoryBarStyle';
import {categoryList} from '../../constants/category';
import {homeStore} from '../../store/homeStore';
import {
  AtiveCategoryBarIconView,
  CategoryBarIconView,
} from '../../../../shared/components/category-icon/CategoryIcon';

const CategoryBar = observer(() => {
  const styles = style();

  const CategoryItemView = observer(({item}: {item: PlaceCategoryType}) => {
    let name = '';
    let color = '';
    switch (item) {
      case PlaceCategoryType.FOOD:
        name = '음식점';
        color = palette.RESTAURANT;
        break;
      case PlaceCategoryType.CAFE:
        name = '카페';
        color = palette.CAFE;
        break;
      case PlaceCategoryType.BAR:
        name = '바';
        color = palette.BAR;
        break;
      case PlaceCategoryType.STORE:
        name = '쇼핑';
        color = palette.STORE;
        break;
      case PlaceCategoryType.POINT_OF_INTEREST:
        name = '문화';
        color = palette.POINT_OF_INTEREST;
        break;
      case PlaceCategoryType.PARK:
        name = '공원';
        color = palette.PARK;
        break;

      default:
        break;
    }

    const onPressCategory = async () => {
      homeStore.setCategory(item);
      homeStore.setIsNearPlace(true);
      await homeStore.getFetchNearPlaceList();
    };
    return (
      <CustomTouchable
        onPress={onPressCategory}
        style={[
          styles.category_item,
          homeStore.category === item && {borderColor: color},
        ]}>
        {homeStore.category === item ? (
          <AtiveCategoryBarIconView type={name} width={20} />
        ) : (
          <CategoryBarIconView type={name} width={20} />
        )}

        <CustomText
          style={[
            styles.item_text,
            homeStore.category === item && {
              color: color,
              fontFamily: fontWt.Bold,
            },
          ]}>
          {name}
        </CustomText>
      </CustomTouchable>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.content_container}>
          {categoryList.map((item, index) => {
            return <CategoryItemView key={`${index}_${item}`} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
});
export default CategoryBar;
