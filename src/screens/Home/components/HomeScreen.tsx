import {View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';

export const HomeScreen = () => {
  return (
    <View style={style.container}>
      <CustomText>어디로 가시나요?</CustomText>
    </View>
  );
};
