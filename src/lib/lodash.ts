import {isArray, isEmpty, isNull, isUndefined} from 'lodash';

export function isBlank(value: any): value is null | undefined {
  if (value === '') {
    return true;
  }

  if (isNull(value)) {
    return true;
  }

  if (isUndefined(value)) {
    return true;
  }

  if (isArray(value) && isEmpty(value)) {
    return true;
  }

  return false;
}

export function isNotBlank(value: any) {
  return !isBlank(value);
}
