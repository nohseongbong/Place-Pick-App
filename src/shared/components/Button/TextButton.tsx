import {useCallback} from 'react';

// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';

// styles
import shadowStyle from '../../styles/shadow';
import buttonStyle from './button.style';

// libs
import {wt} from '../../../lib/responsiveSize';

// types
import {ColorType, ThemeType} from '../../constants/palette';
import {StyleProp, ViewStyle} from 'react-native';

interface Props {
  color?: keyof typeof ColorType;
  theme?: keyof typeof ThemeType;
  activeColor?: keyof typeof ColorType;
  activeTheme?: keyof typeof ThemeType;
  textColor?: keyof typeof ColorType;
  textTheme?: keyof typeof ThemeType;
  isShadow?: boolean;
  isRight?: boolean;
  isActive?: boolean;
  isBorder?: boolean;
  text: string;
  style?: StyleProp<ViewStyle>;
  size: 'full' | 'padding';
}

function TextButton({
  color,
  theme,
  isShadow,
  isRight,
  text,
  textColor,
  textTheme,
  isActive,
  isBorder,
  style,
  size,
}: Props) {
  const handleColor = useCallback(() => {
    if (color && theme) {
      if (isActive) {
        // @ts-ignore
        return ColorType[activeColor][activeTheme];
      } else {
        // @ts-ignore
        return ColorType[color][theme];
      }
    } else {
      undefined;
    }
  }, [color, theme]);
  const handleSize = useCallback(() => {
    if (size) {
      switch (size) {
        case 'full':
          return {width: '100%'};
        case 'padding':
          return {paddingHorizontal: wt(32)};
      }
    }
  }, [size]);

  return (
    <CustomTouchable
      style={[
        buttonStyle.container,
        {backgroundColor: handleColor()},
        isShadow && shadowStyle.shdow,
        {flexDirection: isRight ? 'row-reverse' : 'row'},
        isBorder && {borderColor: ColorType.line.normal, borderWidth: 1},
        handleSize(),
        style,
      ]}>
      <CustomText fs="Body" fw="Bold" color={textColor} theme={textTheme}>
        {text}
      </CustomText>
    </CustomTouchable>
  );
}

export default TextButton;
