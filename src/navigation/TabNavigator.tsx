import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '../types/navigation/pramsType';
import {SCREEN_NAME} from '../constants/navigation';
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREEN_NAME.HOME} component={HomeScreen} options={{title: '코스 만들기'}} />
      <Tab.Screen name={SCREEN_NAME.COLLECTION} component={CollectionScreen} options={{title: '내가 만든 코스'}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
