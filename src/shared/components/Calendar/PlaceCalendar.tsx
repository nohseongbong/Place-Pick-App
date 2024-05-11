import {useState} from 'react';
import {Theme} from 'react-native-calendars/src/types';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

// components
import {ColorType} from '../../constants/palette';
import SvgComponent from '../SvgComponent/SvgComponent';

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

function PlaceCalendar() {
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
    <Calendar
      theme={theme}
      showSixWeeks={false}
      renderArrow={direction => (
        <SvgComponent
          icon="arrow_left"
          style={{transform: [{scaleX: direction === 'right' ? -1 : 1}]}}
        />
      )}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markingType={'custom'}
      markedDates={{
        [selected]: marking,
      }}
      monthFormat={'MM월'}
      // 월 페이지에 다른 달의 날짜를 보여주지 않음
      hideExtraDays={false}
    />
  );
}

export default PlaceCalendar;
