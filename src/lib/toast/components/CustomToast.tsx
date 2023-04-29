// App.jsx
import {View} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/customToast';

const styles = style();
const toastConfig = {
  placePick: ({text1, props}: any) => (
    <View style={styles.container}>
      <CustomText>{text1}</CustomText>
    </View>
  ),
};

export const CustomToast = () => {
  return <Toast config={toastConfig} />;
};
