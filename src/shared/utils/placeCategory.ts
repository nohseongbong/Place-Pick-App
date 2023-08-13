import {PlaceCategoryType} from '../constants/placeCategoryType';

export const rank = [
  PlaceCategoryType.PARK,
  PlaceCategoryType.BAR,
  PlaceCategoryType.FOOD,
  PlaceCategoryType.CAFE,
  PlaceCategoryType.STORE,
  PlaceCategoryType.TRAIN,
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
