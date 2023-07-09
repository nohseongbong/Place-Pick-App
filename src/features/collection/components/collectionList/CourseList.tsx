import React from 'react';
import PlaceListItem from './CourseListItem';
import style from '../../styles/courseListStyle';
import CustomFlatList from '../../../../shared/components/customComponents/CustomFlatList';
import {PlaceCategoryType} from '../../../../shared/constants/placeCategoryType';

const CourseList = () => {
  const data = [
    {
      id: 0,
      name: '강남역',
      place_list: [
        {name: '낙원타코 강남역점', place_id: '0', category: PlaceCategoryType.RESTAURANT},
        {name: '데이트 코스 이름', place_id: '1', category: PlaceCategoryType.POINT_OF_INTEREST},
        {name: '데이트 코스 이름 2', place_id: '2', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름 3', place_id: '3', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름 4', place_id: '4', category: PlaceCategoryType.STORE},
      ],
    },
    {
      id: 1,
      name: '데이트 코스 이름이다1',
      place_list: [
        {name: '낙원타코 강남역점', place_id: '0', category: PlaceCategoryType.RESTAURANT},
        {name: '데이트 코스 이름', place_id: '1', category: PlaceCategoryType.POINT_OF_INTEREST},
        {name: '데이트 코스 이름 2', place_id: '2', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름 3', place_id: '3', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름 4', place_id: '4', category: PlaceCategoryType.STORE},
      ],
    },
    {
      id: 2,
      name: '데이트 코스 이름이다2',
      place_list: [
        {name: '낙원타코 강남역점', place_id: '0', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름', place_id: '1', category: PlaceCategoryType.POINT_OF_INTEREST},
        {name: '데이트 코스 이름 2', place_id: '2', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름 3', place_id: '3', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름 4', place_id: '4', category: PlaceCategoryType.POINT_OF_INTEREST},
      ],
    },
    {
      id: 3,
      name: '데이트 코스 이름이다3',
      place_list: [
        {name: '낙원타코 강남역점', place_id: '0', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름', place_id: '1', category: PlaceCategoryType.POINT_OF_INTEREST},
        {name: '데이트 코스 이름 2', place_id: '2', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름 3', place_id: '3', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름 4', place_id: '4', category: PlaceCategoryType.STORE},
      ],
    },
    {
      id: 4,
      name: '데이트 코스 이름이다4',
      place_list: [
        {name: '낙원타코 강남역점', place_id: '0', category: PlaceCategoryType.STORE},
        {name: '데이트 코스 이름', place_id: '1', category: PlaceCategoryType.POINT_OF_INTEREST},
        {name: '데이트 코스 이름 2', place_id: '2', category: PlaceCategoryType.CAFE},
        {name: '데이트 코스 이름 3', place_id: '3', category: PlaceCategoryType.PARK},
        {name: '데이트 코스 이름 4', place_id: '4', category: PlaceCategoryType.STORE},
      ],
    },
  ];
  const styles = style();
  return (
    <CustomFlatList
      data={data}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => `${item.place_id}_${index}`}
      renderItem={item => <PlaceListItem model={item.item} />}
    />
  );
};

export default CourseList;
