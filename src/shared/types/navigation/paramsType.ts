import {SCREEN_NAME, STACK_NAME} from '../../constants/navigation';

export type RootStackParamList = {
  [STACK_NAME.TAB]: undefined;
  [STACK_NAME.MAIN]: undefined;
  [STACK_NAME.AUTH]: undefined;
  [SCREEN_NAME.SPLASH]: undefined;
};

export type AuthStackParamList = {
  [SCREEN_NAME.LOGIN]: undefined;
};

export type TabStackParamList = {
  [SCREEN_NAME.HOME]: undefined;
  [SCREEN_NAME.COLLECTION]: undefined;
};
