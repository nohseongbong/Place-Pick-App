import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME, STACK_NAME} from '../shared/constants/navigation';
import TabNavigator from './TabNavigator';
import SearchScreen from '../screens/SearchScreen';
import {RootStackParamList} from '../shared/types/navigation/paramsType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_NAME.TAB}
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name={STACK_NAME.TAB} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAME.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
