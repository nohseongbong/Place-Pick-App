import {observer} from 'mobx-react-lite';

import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import CustomSafeAreaView from '../../../shared/components/customComponents/CustomSafeAreaView';
import HomeDetailHeader from '../../../shared/components/header/components/HomeDetailHeader';
import CustomTextInput from '../../../shared/components/customComponents/CustomTextInput';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';

const SearchContainer = observer(() => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <CustomSafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <HomeDetailHeader />
      <CustomText>검색 페이지</CustomText>
      <CustomTextInput />
    </CustomSafeAreaView>
  );
});

export default SearchContainer;
