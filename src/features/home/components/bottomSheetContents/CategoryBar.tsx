import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {PlaceCategoryType} from '../../../../shared/constants/placeCategoryType';
import CustomText from '../../../../shared/components/customComponents/CustomText';
import {palette} from '../../../../shared/constants/palette';
import style from '../../styles/categoryBarStyle';
import {categoryList} from '../../constants/category';
import {homeStore} from '../../store/homeStore';
import {SVG_IMG} from '../../../../assets/images';

const CategoryBar = observer(() => {
  const styles = style();

  const CategoryItemView = observer(({item}: {item: PlaceCategoryType}) => {
    let name = '';
    let color = '';
    switch (item) {
      case PlaceCategoryType.RESTAURANT:
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
    const CategoryIconView = ({type}: {type: string}) => {
      const category: {[key: string]: JSX.Element} = {
        음식점: <SVG_IMG.RESTAURANT width={20} height={20} />,
        바: <SVG_IMG.BAR width={20} height={20} />,
        공원: <SVG_IMG.PARK width={20} height={20} />,
        쇼핑: <SVG_IMG.SHOP width={20} height={20} />,
        카페: <SVG_IMG.CAFE width={20} height={20} />,
        문화: <SVG_IMG.FLAG width={20} height={20} />,
      };
      return category[type];
    };
    const AtiveCategoryIconView = ({type}: {type: string}) => {
      const category: {[key: string]: JSX.Element} = {
        음식점: <SVG_IMG.RESTAURANT_ACTIVE width={20} height={20} />,
        바: <SVG_IMG.BAR_ACTIVE width={20} height={20} />,
        공원: <SVG_IMG.PARK_ACTIVE width={20} height={20} />,
        쇼핑: <SVG_IMG.SHOP_ACTIVE width={20} height={20} />,
        카페: <SVG_IMG.CAFE_ACTIVE width={20} height={20} />,
        문화: <SVG_IMG.FLAG_ACTIVE width={20} height={20} />,
      };
      return category[type];
    };

    const onPressCategory = () => {
      homeStore.setCategory(item);
    };
    return (
      <CustomTouchable
        onPress={onPressCategory}
        style={[styles.category_item, homeStore.category === item && {backgroundColor: color}]}>
        {homeStore.category === item ? <CategoryIconView type={name} /> : <AtiveCategoryIconView type={name} />}

        <CustomText style={[styles.item_text, homeStore.category === item && {color: palette.BACKGROUND}]}>
          {name}
        </CustomText>
      </CustomTouchable>
    );
  });

  return (
    <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoryList.map((item, index) => {
          return <CategoryItemView key={`${index}_${item}`} item={item} />;
        })}
      </View>
    </ScrollView>
  );
});
export default CategoryBar;
