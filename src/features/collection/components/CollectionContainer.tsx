import React from 'react';
import {View} from 'react-native';

import Header from './collectionList/Header';
import style from '../styles/collectionContainerStyle';
import CourseList from './collectionList/CourseList';
import CourseListHeader from './collectionList/CourseListHeader';

const CollectionContainer = () => {
  const styles = style();
  return (
    <View style={styles.container}>
      <Header />
      <CourseListHeader />
      <CourseList />
    </View>
  );
};

export default CollectionContainer;
