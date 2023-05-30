import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SCREEN_NAME} from '../shared/constants/navigation';
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import TabBar from '../shared/components/bottomTab/TabBar';
import {RootStackParamList} from '../shared/types/navigation/paramsType';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={SCREEN_NAME.HOME} component={HomeScreen} options={{title: '코스 만들기'}} />
      <Tab.Screen name={SCREEN_NAME.COLLECTION} component={CollectionScreen} options={{title: '내가 만든 코스'}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
