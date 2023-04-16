import {TextProps, Text, StyleSheet} from 'react-native';
import {palette} from '../../constants/palette';

const CustomText = ({children, style, ...props}: TextProps) => {
  const styles = StyleSheet.create({
    text: {
      color: palette.TEXT,
    },
  });

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
