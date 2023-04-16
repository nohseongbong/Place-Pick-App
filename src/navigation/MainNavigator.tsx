import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/pramsType';
import {NANIGATOR_NAME} from '../constants/navigation';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NANIGATOR_NAME.TAB}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={NANIGATOR_NAME.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
