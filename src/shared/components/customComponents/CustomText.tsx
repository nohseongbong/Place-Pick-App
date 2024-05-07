import {TextProps, Text, StyleSheet} from 'react-native';
import {fontWt, ColorType, ThemeType, fontSize} from '../../constants/palette';
import {fs as font} from '../../../lib/responsiveSize';

interface Props extends TextProps {
  color?: keyof typeof ColorType;
  theme?: keyof typeof ThemeType;
  fw?: keyof typeof fontWt;
  fs?: keyof typeof fontSize;
}

const CustomText = ({
  children,
  style,
  color,
  fw,
  fs,
  theme,
  ...props
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      // @ts-ignore
      color: color && theme ? ColorType[color][theme] : ColorType.basic.body,
      fontFamily: fw ? fontWt[fw] : fontWt.Regular,
      fontSize: fs ? font(fontSize[fs]) : 14,
    },
  });

  return (
    <Text
      style={[styles.text, style]}
      ellipsizeMode="tail"
      numberOfLines={1}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
