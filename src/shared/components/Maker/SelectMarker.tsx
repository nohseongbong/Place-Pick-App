import {View} from 'react-native';
// components
import {CourseCategoryIconView} from '../category-icon/CategoryIcon';

// styles
import style from './marker.style';

// images
import CustomText from '../customComponents/CustomText';

interface Props {
  category: string;
  number: number;
  placeName: string;
}

function SelectMarker({category, number, placeName}: Props) {
  return (
    <View style={style.select_container}>
      <View style={style.selected_icon_wrap}>
        <CourseCategoryIconView width={30} type={category} />
        <CustomText
          style={style.selected_text}
          fs="Callout"
          fw="SemiBold"
          color="basic"
          theme="background">
          {number}
        </CustomText>
      </View>
      <CustomText
        fs="Callout"
        fw="SemiBold"
        color="basic"
        theme="body"
        numberOfLines={3}>
        {placeName}
      </CustomText>
    </View>
  );
}

export default SelectMarker;
