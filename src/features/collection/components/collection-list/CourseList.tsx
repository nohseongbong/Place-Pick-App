import React from 'react';
import {observer} from 'mobx-react-lite';

import PlaceListItem from './CourseListItem';
import style from '../../styles/courseListStyle';
import CustomFlatList from '../../../../shared/components/customComponents/CustomFlatList';
import {collectionStore} from '../../store/collectionStore';
import {toJS} from 'mobx';

const CourseList = observer(() => {
  const styles = style();

  return (
    <CustomFlatList
      data={toJS(collectionStore.courseList)}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => `${item.courseId}_${index}`}
      renderItem={item => <PlaceListItem model={item.item} />}
    />
  );
});

export default CourseList;
