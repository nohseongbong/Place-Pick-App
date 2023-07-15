import React, {useCallback} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useFocusEffect} from '@react-navigation/native';

import Header from './collectionList/Header';
import style from '../styles/collectionContainerStyle';
import CourseList from './collectionList/CourseList';
import CourseListHeader from './collectionList/CourseListHeader';
import {collectionStore} from '../store/collectionStore';
import EditHeader from './collectionList/EditHeader';

const CollectionContainer = observer(() => {
  const styles = style();

  useFocusEffect(
    useCallback(() => {
      return () => {
        collectionStore.reset();
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      {collectionStore.isEdit ? <EditHeader /> : <Header />}
      <CourseListHeader />
      <CourseList />
    </View>
  );
});

export default CollectionContainer;
