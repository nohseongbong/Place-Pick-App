import React, {useCallback} from 'react';
import {CategoryColor, ColorType, ThemeType} from '../../constants/palette';
import {SVG_ICON} from '../../../assets/images';
import {SvgProps} from 'react-native-svg';

type SvgComponentProps = {
  icon: keyof typeof SVG_ICON;
  isStroke?: boolean;
  isDisable?: boolean;
  isDefault?: boolean;
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
  isDefault,
  disableColor,
  disableTheme,
  isStroke,
  ...rest
}: SvgComponentProps) {
  const IconComponent = SVG_ICON[icon];
  const isColor = color && theme;

  const handleColor = useCallback(() => {
    if (isColor) {
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
      } else {
      }
    }
  }, [color, theme, icon, isDisable]);

  return (
    <>
      {!isDefault ? (
        <IconComponent
          {...rest}
          fill={!isStroke && handleColor()}
          stroke={isStroke && handleColor()}
        />
      ) : (
        <IconComponent {...rest} />
      )}
    </>
  );
}

export default SvgComponent;
