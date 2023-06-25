import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomText from '../../../shared/components/customComponents/CustomText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import CustomTouchable from '../../../shared/components/customComponents/CustomTouchable';
import {RootStackParamList} from '../../../shared/types/navigation/paramsType';
import style from '../styles/courseDetailContainerStyle';
import CourseMapView from '../../../shared/components/course/components/CourseMapView';
import {courseStore} from '../../home/store/courseStore';
import Course from '../../../shared/components/course/components/Course';

const CourseDetailContainer = () => {
  const styles = style();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomText style={styles.title_text}>내가 만든 나만의 코스</CustomText>
      <CourseMapView />
      <View style={styles.course_info_wrap}>
        <View style={styles.course_info}>
          <CustomText style={styles.course_title_text}>전체 거리</CustomText>
          <CustomText style={styles.course_text}>5km</CustomText>
        </View>
        <View style={styles.course_info}>
          <CustomText style={styles.course_title_text}>총 시간</CustomText>
          <CustomText style={styles.course_text}>30분</CustomText>
        </View>
        <View style={styles.course_info}>
          <CustomText style={styles.course_title_text}>방문할 장소</CustomText>
          <CustomText style={styles.course_text}>4곳</CustomText>
        </View>
      </View>
      <CustomText style={styles.course_list_title_text}>방문할 장소</CustomText>
      <View style={styles.course_list_wrap}>
        {courseStore.courseList.map((item, index) => {
          return <Course isMoreState={false} item={item} index={index} key={`${item.place_id}_${index}`} />;
        })}
      </View>
    </ScrollView>
  );
};

export default CourseDetailContainer;
