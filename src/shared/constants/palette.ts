export enum palette {
  PRIMARY = '#FF78EF',
  BACKGROUND = '#fff',
  INNER_BACKGOUND = '#F7F8F9',
  TEXT = '#343a40',
  SUB_TEXT = '#868E96',
  PRIMARY_BLACK = '#212429',
  BORDER = '#CDD3D9',
  RESTAURANT = '#FFAAA5',
  POINT_OF_INTEREST = '#A5B9FF',
  CAFE = '#FFD0A5',
  PARK = '#81DE84',
  STORE = '#FFA5F4',
  BAR = '#C1A5FF',
  TRAIN = '#5898FF',
  PRIMARY_TEXT = '#fff',
  SUB_BORDER = '#e9ecef',
  DISABLED = '#ffeefd',
  KAKAO = '#FFE812',
}

export enum fontSize {
  Title = 34,
  Subtitle = 24,
  Heading = 20,
  Headline = 18,
  Body = 16,
  BodyReading = 16,
  Callout = 14,
  CalloutReading = 14,
  Subhead = 15,
  Caption = 12,
  Caption2 = 10,
}

export enum fontWt {
  Black = 'Pretendard-Black',
  Bold = 'Pretendard-Bold',
  ExtraBold = 'Pretendard-ExtraBold',
  ExtraLight = 'Pretendard-ExtraLight',
  Light = 'Pretendard-Light',
  Medium = 'Pretendard-Medium',
  Regular = 'Pretendard-Regular',
  SemiBold = 'Pretendard-SemiBold',
  Thim = 'Pretendard-Thim',
}

export const ColorType = {
  primary: {
    normal: '#FF78EF',
    right: '#FFEEFD',
    black: '#212429',
  },
  basic: {
    body: '#343A40',
    secondary: '#868E96',
    tertiary: '#CDD3D9',
    quaternary: '#E9ECEF',
    background: '#FFFFFF',
    alternative: '#F4F4F4',
  },
  line: {
    normal: '#CDD3D9',
    alternative: '#E9ECEF',
  },
  status: {
    positive: '#00BF40',
    cautionary: '#FF9200',
    destructive: '#FF4242',
  },
  category: {
    restaurant: '#FFAAA5',
    cafe: '#FFD0A5',
    bar: '#C1A5FF',
    shop: '#FFA5F4',
    culture: '#A5B9FF',
    park: '#A5FFA8',
  },
  gray: {
    '200': '#f7f8f9',
    '250': '#f0f2f4',
  },
  material: {
    dimming: '#515153',
  },
};

export enum ThemeType {
  normal,
  right,
  black,
  body,
  secondary,
  tertiary,
  quaternary,
  background,
  alternative,
  positive,
  cautionary,
  destructive,
  restaurant,
  cafe,
  bar,
  shop,
  culture,
  park,
}

export const CategoryColor = {
  bar: ColorType.category.bar,
  restaurant: ColorType.category.restaurant,
  cafe: ColorType.category.cafe,
  shop: ColorType.category.shop,
  culture: ColorType.category.culture,
  park: ColorType.category.park,
};
