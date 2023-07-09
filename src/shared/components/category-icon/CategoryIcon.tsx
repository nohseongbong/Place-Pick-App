import {SVG_IMG} from '../../../assets/images';
import {wt} from '../../../lib/responsiveSize';

interface Props {
  type: string;
  width: number;
}

export const CategoryIconView = ({type, width}: Props) => {
  const category: {[key: string]: JSX.Element} = {
    restaurant: <SVG_IMG.CATEGORY_RESTAURANT width={wt(width)} height={wt(width)} />,
    bar: <SVG_IMG.CATEGORY_BAR width={wt(width)} height={wt(width)} />,
    park: <SVG_IMG.CATEGORY_PARK width={wt(width)} height={wt(width)} />,
    store: <SVG_IMG.CATEGORY_SHOP width={wt(width)} height={wt(width)} />,
    cafe: <SVG_IMG.CATEGORY_CAFE width={wt(width)} height={wt(width)} />,
    transit_station: <SVG_IMG.CATEGORY_TRAIN width={wt(width)} height={wt(width)} />,
    point_of_interest: <SVG_IMG.CATEGORY_FLAG width={wt(width)} height={wt(width)} />,
  };
  return category[type];
};

export const CourseCategoryIconView = ({type, width}: Props) => {
  const category: {[key: string]: JSX.Element} = {
    restaurant: <SVG_IMG.COURSE_RESTAURANT width={width} height={width} />,
    bar: <SVG_IMG.COURSE_BAR width={width} height={width} />,
    park: <SVG_IMG.COURSE_PARK width={width} height={width} />,
    store: <SVG_IMG.COURSE_STORE width={width} height={width} />,
    cafe: <SVG_IMG.COURSE_CAFE width={width} height={width} />,
    transit_station: <SVG_IMG.COURSE_TRAIN width={width} height={width} />,
    point_of_interest: <SVG_IMG.COURSE_CULTURE width={width} height={width} />,
  };
  return category[type];
};

export const CategoryBarIconView = ({type, width}: Props) => {
  const category: {[key: string]: JSX.Element} = {
    음식점: <SVG_IMG.RESTAURANT width={width} height={width} />,
    바: <SVG_IMG.BAR width={width} height={width} />,
    공원: <SVG_IMG.PARK width={width} height={width} />,
    쇼핑: <SVG_IMG.SHOP width={width} height={width} />,
    카페: <SVG_IMG.CAFE width={width} height={width} />,
    문화: <SVG_IMG.FLAG width={width} height={width} />,
  };
  return category[type];
};

export const AtiveCategoryBarIconView = ({type, width}: Props) => {
  const category: {[key: string]: JSX.Element} = {
    음식점: <SVG_IMG.RESTAURANT_ACTIVE width={width} height={width} />,
    바: <SVG_IMG.BAR_ACTIVE width={width} height={width} />,
    공원: <SVG_IMG.PARK_ACTIVE width={width} height={width} />,
    쇼핑: <SVG_IMG.SHOP_ACTIVE width={width} height={width} />,
    카페: <SVG_IMG.CAFE_ACTIVE width={width} height={width} />,
    문화: <SVG_IMG.FLAG_ACTIVE width={width} height={width} />,
  };
  return category[type];
};
