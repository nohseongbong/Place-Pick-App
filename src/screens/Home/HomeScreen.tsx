import {View} from 'react-native';
import MainHeader from '../../shared/components/header/components/MainHeader';
import PlaceSearch from '../../features/home/components/bottomSheetContents/PlaceSearch';
import style from './styles/HomeScreenStyle';
import HomeTitle from './components/HomeTitle';
import {useState} from 'react';
import InfoTab from '../../shared/components/Tab/InfoTab';
import IconTextButton from '../../shared/components/Button/IconTextButton';
import TextButton from '../../shared/components/Button/TextButton';

const HomeScreen = () => {
  const [selected, setSelected] = useState<string>('map');
  const test = [
    {key: 'map', text: '위치 정보'},
    {key: 'picture', text: '사진 정보'},
    {key: 'info', text: '운영 정보'},
  ];

  const onPressTab = (item: string) => {
    setSelected(item);
  };

  return (
    <View style={style.container}>
      <MainHeader />
      <InfoTab list={test} selected={selected} onPressTab={onPressTab} />
      <IconTextButton
        style={{paddingVertical: 10}}
        size="padding"
        color="primary"
        theme="background"
        textColor="basic"
        textTheme="secondary"
        icon="arrow_left"
        isRight
        text="버튼"
        isDisable
      />
      <TextButton
        color="primary"
        theme="normal"
        text="코스 완성하기"
        size="full"
        textColor="basic"
        textTheme="background"
      />
      <PlaceSearch />
      <HomeTitle />
    </View>
  );
};

export default HomeScreen;
