import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREEN_NAME, STACK_NAME} from '../shared/constants/navigation';
import TabNavigator from './TabNavigator';
import {MainStackParamList} from '../shared/types/navigation/paramsType';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import CollectionCourseDetailScreen from '../screens/CollectionCourseDetailScreen';
import MySettingScreen from '../screens/my-setting/MySettingScreen';
import ManagementScreen from '../screens/my-setting/ManagementScreen';
import TermsScreen from '../screens/my-setting/TermsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_NAME.TAB}
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name={STACK_NAME.TAB} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAME.COURSEDETAIL} component={CourseDetailScreen} />
      <Stack.Screen name={SCREEN_NAME.COLLECTIONCOURSEDETAIL} component={CollectionCourseDetailScreen} />
      <Stack.Screen name={SCREEN_NAME.MYSETTING} component={MySettingScreen} />
      <Stack.Screen name={SCREEN_NAME.MANAGEMENT} component={ManagementScreen} />
      <Stack.Screen name={SCREEN_NAME.TERMS} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
