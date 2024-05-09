// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';

// styles
import style from './category.style';

interface Props {
  text: string;
}

function CategoryText({text}: Props) {
  return (
    <CustomTouchable style={[style.container, style.text_container]}>
      <CustomText fs="Headline" fw="Bold" color={'basic'} theme={'body'}>
        {text}
      </CustomText>
    </CustomTouchable>
  );
}

export default CategoryText;
