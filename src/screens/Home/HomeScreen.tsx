import {View} from 'react-native';
import MainHeader from '../../shared/components/header/components/MainHeader';
import PlaceSearch from '../../features/home/components/bottomSheetContents/PlaceSearch';
import style from './styles/HomeScreenStyle';
import HomeTitle from './components/HomeTitle';
import {useState} from 'react';
import InfoTab from '../../shared/components/Tab/InfoTab';
import IconTextButton from '../../shared/components/Button/IconTextButton';
import TextButton from '../../shared/components/Button/TextButton';
import CategoryIcon from '../../shared/components/Category/CategoryIcon';
import CategoryText from '../../shared/components/Category/CategoryText';
import CategoryMarker from '../../shared/components/Maker/CategoryMarker';
import SelectMarker from '../../shared/components/Maker/SelectMarker';
import DefalutIconTab from '../../shared/components/Tab/DefalutIconTab';

const HomeScreen = () => {
  const [selected, setSelected] = useState<string>('map');
  const [selected2, setSelected2] = useState<string>('all');
  const test = [
    {key: 'map', text: '위치 정보'},
    {key: 'picture', text: '사진 정보'},
    {key: 'info', text: '운영 정보'},
  ];
  const test2 = [
    {key: 'all', text: '전체'},
    {key: 'restaurant', text: '식당'},
    {key: 'cafe', text: '카페'},
    {key: 'bar', text: '술집'},
    {key: 'shop', text: '쇼핑'},
    {key: 'culture', text: '문화'},
    {key: 'park', text: '공원'},
  ];

  const onPressTab = (item: string) => {
    setSelected(item);
  };
  const onPressTab2 = (item: string) => {
    setSelected2(item);
  };

  return (
    <View style={style.container}>
      <MainHeader />
      <DefalutIconTab
        list={test2}
        selected={selected2}
        onPressTab={onPressTab2}
      />
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
      <CategoryIcon text="홍대입구" />
      <CategoryText text="홈대입구" />
      <CategoryMarker icon="restaurant" />
      <CategoryMarker icon="cafe" />
      <CategoryMarker icon="bar" />
      <CategoryMarker icon="culture" />
      <CategoryMarker icon="park" />
      <SelectMarker category="bar" placeName="야호" number={1} />
      <PlaceSearch />
      <HomeTitle />
    </View>
  );
};

export default HomeScreen;
