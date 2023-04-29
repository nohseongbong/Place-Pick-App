import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../shared/types/navigation/pramsType';
import {SCREEN_NAME, STACK_NAME} from '../shared/constants/navigation';
import TabNavigator from './TabNavigator';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={STACK_NAME.TAB}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={STACK_NAME.TAB} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAME.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
