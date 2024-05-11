import React from 'react';
import {View, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';

const WeeklyCalendar = () => {
  const handleScroll = () => {
    // 스크롤 이벤트를 처리하여 스크롤을 막음
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={{
          '2024-05-11': [{text: 'Event 1'}, {text: 'Event 2'}],
          '2024-05-12': [{text: 'Event 3'}],
          // Add your events data here
        }}
        renderItem={item => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
        renderEmptyDate={() => (
          <View>
            <Text>No events for this date</Text>
          </View>
        )}
        rowHasChanged={(r1, r2) => r1.text !== r2.text}
        onScroll={handleScroll} // 스크롤 이벤트 처리
        scrollEnabled={false} // 스크롤 막기
        overScrollMode={'never'}
        renderList={() => <></>}
      />
    </View>
  );
};

export default WeeklyCalendar;
