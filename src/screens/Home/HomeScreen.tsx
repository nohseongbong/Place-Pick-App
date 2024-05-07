import {View} from 'react-native';
import CustomText from '../../shared/components/customComponents/CustomText';
import MainHeader from '../../shared/components/header/components/MainHeader';
import PlaceSearch from '../../features/home/components/bottomSheetContents/PlaceSearch';
import style from './styles/HomeScreenStyle';
import HomeTitle from './components/HomeTitle';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <MainHeader />
      <PlaceSearch />
      <HomeTitle />
    </View>
  );
};

export default HomeScreen;
