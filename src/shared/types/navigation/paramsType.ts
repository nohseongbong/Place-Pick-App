import {SCREEN_NAME, STACK_NAME} from '../../constants/navigation';

export type RootStackParamList = {
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
export type MainStackParamList = {
  [STACK_NAME.TAB]: undefined;
  [SCREEN_NAME.COURSEDETAIL]: undefined;
  [SCREEN_NAME.COLLECTIONCOURSEDETAIL]: undefined;
};
