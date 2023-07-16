import React, {useCallback} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useFocusEffect} from '@react-navigation/native';

import Header from './collection-list/Header';
import style from '../styles/collectionContainerStyle';
import CourseList from './collection-list/CourseList';
import CourseListHeader from './collection-list/CourseListHeader';
import {collectionStore} from '../store/collectionStore';
import EditHeader from './collection-list/EditHeader';
import DeleteModal from '../../../shared/components/custom-modal/DeleteModal';

const CollectionContainer = observer(() => {
  const styles = style();

  const onPressModalClose = () => {
    collectionStore.setIsDeleteModal(false);
  };

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
      <DeleteModal
        isVisible={collectionStore.isDeleteModal}
        onClose={onPressModalClose}
        onPress={collectionStore.deleteCollectionCourse}
      />
    </View>
  );
});

export default CollectionContainer;
