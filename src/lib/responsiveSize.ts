import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const basicDimensions = {
  width: 375,
  height: 812,
};

export const wt = (basicwidth: number): number => {
  const percentage = (basicwidth / basicDimensions.width) * 100;

  return responsiveScreenWidth(percentage);
};

export const ht = (basicheight: number): number => {
  const percentage = (basicheight / basicDimensions.height) * 100;

  return responsiveScreenHeight(percentage);
};

export const fs = (basicsize: number): number => {
  const percentage = basicsize * 0.135;

  return responsiveScreenFontSize(percentage);
};
