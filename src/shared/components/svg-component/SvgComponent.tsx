import React, {useCallback} from 'react';
import {ColorType, ThemeType} from '../../constants/palette';
import {SVG_ICON} from '../../../assets/images';
import {SvgProps} from 'react-native-svg';

type SvgComponentProps = {
  icon: keyof typeof SVG_ICON;
  isStroke?: boolean;
  isActive?: boolean;
  color?: keyof typeof ColorType;
  theme?: keyof typeof ThemeType;
  activeColor?: keyof typeof ColorType;
  activeTheme?: keyof typeof ThemeType;
} & SvgProps;

function SvgComponent({
  icon,
  color,
  theme,
  isActive,
  activeColor,
  activeTheme,
  isStroke,
  ...rest
}: SvgComponentProps) {
  const IconComponent = SVG_ICON[icon];

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

  return (
    <IconComponent
      {...rest}
      fill={!isStroke && handleColor()}
      stroke={isStroke ? handleColor() : undefined}
    />
  );
}

export default SvgComponent;
