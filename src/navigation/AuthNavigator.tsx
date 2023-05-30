import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../shared/constants/navigation';
import LoginScreen from '../screens/LoginScreen';
import {RootStackParamList} from '../shared/types/navigation/paramsType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.LOGIN}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
