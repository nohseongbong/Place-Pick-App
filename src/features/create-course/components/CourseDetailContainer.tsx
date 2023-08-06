import React from 'react';
import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import CustomText from '../../../shared/components/customComponents/CustomText';
import style from '../styles/courseDetailContainerStyle';
import CourseMapView from '../../../shared/components/course/components/CourseMapView';
import {courseStore} from '../../home/store/courseStore';
import Course from '../../../shared/components/course/components/Course';

const CourseDetailContainer = observer(() => {
  const styles = style();

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <CustomText style={styles.title_text}>내가 만든 나만의 코스</CustomText>
        <CourseMapView />
        <View style={styles.course_info_wrap}>
          <View style={styles.course_info}>
            <CustomText style={styles.course_title_text}>전체 거리</CustomText>
            <CustomText style={styles.course_text}>5km</CustomText>
          </View>
          <View style={styles.course_info}>
            <CustomText style={styles.course_title_text}>방문할 장소</CustomText>
            <CustomText style={styles.course_text}>{courseStore.courseList.length}곳</CustomText>
          </View>
        </View>
        <CustomText style={styles.course_list_title_text}>방문할 장소</CustomText>
        <View style={styles.course_list_wrap}>
          {courseStore.courseList.map((item, index) => {
            return (
              <Course
                isMoreState={false}
                item={item}
                index={index}
                key={`${item.place_id}_${index}`}
                courseConectList={courseStore.courseConectList}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
});

export default CourseDetailContainer;
