import {Image} from 'react-native';

// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';

// styles
import style from './category.style';

// images
import {IMG} from '../../../assets/images';

interface Props {
  text: string;
}

function CategoryIcon({text}: Props) {
  return (
    <CustomTouchable style={style.container}>
      <Image source={IMG.dummy_img} resizeMode="contain" />
      <CustomText
        style={style.text}
        fs="Headline"
        fw="Bold"
        color={'basic'}
        theme={'body'}>
        {text}
      </CustomText>
    </CustomTouchable>
  );
}

export default CategoryIcon;
