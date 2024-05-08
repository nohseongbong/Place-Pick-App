import {useCallback} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

// components
import CustomText from '../customComponents/CustomText';
import CustomTouchable from '../customComponents/CustomTouchable';
import SvgComponent from '../svg-component/SvgComponent';

// styles
import shadowStyle from '../../styles/shadow';
import buttonStyle from './button.style';

// images
import {SVG_ICON} from '../../../assets/images';

// libs
import {wt} from '../../../lib/responsiveSize';

// types
import {ColorType, ThemeType} from '../../constants/palette';

interface Props {
  color?: keyof typeof ColorType;
  theme?: keyof typeof ThemeType;
  textColor?: keyof typeof ColorType;
  textTheme?: keyof typeof ThemeType;
  isShadow?: boolean;
  isRight?: boolean;
  isBorder?: boolean;
  isDisable?: boolean;
  text: string;
  size: 'full' | 'padding';
  style?: StyleProp<ViewStyle>;
  icon: keyof typeof SVG_ICON;
}

function IconTextButton({
  color,
  theme,
  isShadow,
  isRight,
  text,
  textColor,
  textTheme,
  icon,
  isBorder,
  isDisable,
  size,
  style,
}: Props) {
  const textColorStyle = isDisable ? 'basic' : textColor;
  const textThemeStyle = isDisable ? 'tertiary' : textTheme;

  const handleColor = useCallback(() => {
    if (color && theme) {
      if (isDisable) {
        return ColorType.gray[200];
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
      <View style={[buttonStyle.icon_wrap]}>
        {icon === 'arrow_left' ? (
          <SvgComponent
            color={textColorStyle}
            theme={textThemeStyle}
            width={7}
            height={12}
            rotation={isRight ? 180 : 0}
            icon="arrow_left"
          />
        ) : (
          <SvgComponent
            color={textColorStyle}
            theme={textThemeStyle}
            icon={icon}
          />
        )}
      </View>
      <CustomText
        fs="Body"
        fw="Bold"
        color={textColorStyle}
        theme={textThemeStyle}>
        {text}
      </CustomText>
    </CustomTouchable>
  );
}

export default IconTextButton;
