import React, {useCallback} from 'react';
import {CategoryColor, ColorType, ThemeType} from '../../constants/palette';
import {SVG_ICON} from '../../../assets/images';
import {SvgProps} from 'react-native-svg';

type SvgComponentProps = {
  icon: keyof typeof SVG_ICON;
  isStroke?: boolean;
  isDisable?: boolean;
  color?: keyof typeof ColorType;
  theme?: keyof typeof ThemeType;
  disableColor?: keyof typeof ColorType;
  disableTheme?: keyof typeof ThemeType;
} & SvgProps;

function SvgComponent({
  icon,
  color,
  theme,
  isDisable,
  disableColor,
  disableTheme,
  isStroke,
  ...rest
}: SvgComponentProps) {
  const IconComponent = SVG_ICON[icon];

  const handleColor = useCallback(() => {
    if (color && theme) {
      if (isDisable && disableColor && disableTheme) {
        // @ts-ignore
        return ColorType[disableColor][disableTheme];
      } else {
        if (Object.values(CategoryColor).includes(icon)) {
          // @ts-ignore
          return CategoryColor[icon];
        } else {
          // @ts-ignore
          return ColorType[color][theme];
        }
      }
    } else {
      if (Object.keys(CategoryColor).includes(icon)) {
        // @ts-ignore
        return CategoryColor[icon];
      }
    }
  }, [color, theme, icon, isDisable]);

  return (
    <IconComponent
      {...rest}
      fill={!isStroke ? handleColor() : undefined}
      stroke={isStroke ? handleColor() : undefined}
    />
  );
}

export default SvgComponent;
