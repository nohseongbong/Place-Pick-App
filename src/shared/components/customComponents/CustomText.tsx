import {TextProps, Text, StyleSheet} from 'react-native';
import {fontWt, palette} from '../../constants/palette';

const CustomText = ({children, style, ...props}: TextProps) => {
  const styles = StyleSheet.create({
    text: {
      color: palette.TEXT,
      fontFamily: fontWt.Regular,
    },
  });

  return (
    <Text style={[styles.text, style]} numberOfLines={1} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
