import {PlaceCategoryType} from '../constants/placeCategoryType';

const rank = [
  PlaceCategoryType.PARK,
  PlaceCategoryType.BAR,
  PlaceCategoryType.RESTAURANT,
  PlaceCategoryType.STORE,
  PlaceCategoryType.CAFE,
  PlaceCategoryType.POINT_OF_INTEREST,
];

export const _categoryType = (types: any) => {
  for (let type of rank) {
    if (types.includes(type)) {
      return type;
    }
  }
  return PlaceCategoryType.POINT_OF_INTEREST;
};
