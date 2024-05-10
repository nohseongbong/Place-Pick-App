import {useState} from 'react';
import {Theme} from 'react-native-calendars/src/types';
import {LocaleConfig, WeekCalendar} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

// components
import {ColorType} from '../../constants/palette';
import {View} from 'react-native';

LocaleConfig.locales.fr = {
  monthNames: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

interface MarkingType extends MarkingProps {}

function WeeksCalendar() {
  const today = new Date().toISOString().split('T')[0];
  const [selected, setSelected] = useState(today);
  const theme: Theme = {
    todayTextColor: ColorType.basic.secondary,
    dayTextColor: ColorType.basic.body,
    textSectionTitleColor: ColorType.basic.body,
    monthTextColor: ColorType.basic.body,
    textMonthFontWeight: 'bold',
    textDayStyle: {
      color: ColorType.basic.secondary,
    },
    textInactiveColor: 'blue',
  };

  const marking: MarkingType = {
    selected: true,
    disableTouchEvent: true,
    selectedColor: ColorType.primary.right,
    selectedTextColor: ColorType.basic.body,
    customStyles: {
      text: {
        fontWeight: 'bold',
      },
    },
  };

  return (
    <View style={{width: '100%', backgroundColor: 'red'}}>
      <WeekCalendar
        theme={theme}
        // 초기에 표시할 날짜 설정
        current={selected}
        // 날짜 선택 시 이벤트 처리
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        // 기타 커스터마이징 옵션
        markedDates={{
          [selected]: marking,
        }}
        staticHeader={false}
      />
    </View>
  );
}

export default WeeksCalendar;
