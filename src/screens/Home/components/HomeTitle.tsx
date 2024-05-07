import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/HomeTitleStyle';

const HomeTitle = () => {
  return (
    <View style={style.container}>
      <CustomText color="basic" theme="body" fs="Heading" fw="Bold">
        어디로 가시나요?
      </CustomText>
    </View>
  );
};

export default HomeTitle;
