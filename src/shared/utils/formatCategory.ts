import {DataCategoryType, PlaceCategoryType} from '../constants/placeCategoryType';

type Parameter = {
  res?: DataCategoryType;
  req?: PlaceCategoryType;
};
export const formatCategory = ({res, req}: Parameter): PlaceCategoryType | DataCategoryType => {
  if (res) {
    return PlaceCategoryType[res as DataCategoryType];
  } else {
    return DataCategoryType[req as PlaceCategoryType];
  }
};
