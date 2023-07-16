import React from 'react';
import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomText from '../../../../shared/components/customComponents/CustomText';
import CourseMapView from '../../../../shared/components/course/components/CourseMapView';
import Course from '../../../../shared/components/course/components/Course';
import style from '../../styles/collectionCourseDetailContainerStyle';
import {collectionDetailStore} from '../../store/collectionDetailStore';
import {SVG_IMG} from '../../../../assets/images';
import CustomTouchable from '../../../../shared/components/customComponents/CustomTouchable';
import {wt} from '../../../../lib/responsiveSize';

const CollectionCourseDetailContainer = observer(() => {
  const styles = style();

  const onPressEditCourseName = () => {
    collectionDetailStore.setIsCourseNameModal(true);
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.title_wrap}>
          <CustomText style={styles.title_text}>{collectionDetailStore.courseName}</CustomText>
          <CustomTouchable onPress={onPressEditCourseName} style={styles.edit_wrap}>
            <SVG_IMG.PENCIL width={wt(20)} height={wt(20)} />
          </CustomTouchable>
        </View>
        <CourseMapView />
        <View style={styles.course_info_wrap}>
          <View style={styles.course_info}>
            <CustomText style={styles.course_title_text}>전체 거리</CustomText>
            <CustomText style={styles.course_text}>5km</CustomText>
          </View>
          <View style={styles.course_info}>
            <CustomText style={styles.course_title_text}>방문할 장소</CustomText>
            <CustomText style={styles.course_text}>4곳</CustomText>
          </View>
        </View>
        <CustomText style={styles.course_list_title_text}>방문할 장소</CustomText>
        <View style={styles.course_list_wrap}>
          {collectionDetailStore.courseList.map((item, index) => {
            return <Course isMoreState={false} item={item} index={index} key={`${item.place_id}_${index}`} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
});

export default CollectionCourseDetailContainer;
