import EncryptedStorage from 'react-native-encrypted-storage';
import {isNull} from 'lodash';

export const setStorage = async (key: string, value: any) => {
  try {
    const stringValue = JSON.stringify(value);
    await EncryptedStorage.setItem(key, stringValue);
  } catch (e: any) {
    console.error('setStorage 에러 : ', e.message);
  }
};

export const getStorage = async (key: string) => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (!isNull(value)) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (e: any) {
    console.log(key, 'getStorage 에러 : ', e.message);
  }
};

export const removeStorage = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (e: any) {
    console.error('removeStorage 에러 : ', e.message);
  }
};

export const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (e: any) {
    console.error('clearStorage 에러 : ', e.message);
  }
};
