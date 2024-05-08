import {ScrollView, View} from 'react-native';

// components
import CustomTouchable from '../customComponents/CustomTouchable';
import CustomText from '../customComponents/CustomText';

// styles
import style from './tab.style';

interface Props {
  list: {
    key: string;
    text: string;
  }[];
  selected: string;
  onPressTab: (item: string) => void;
}

function DefalutTab({list, selected, onPressTab}: Props) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={style.container}>
          {list.map(item => {
            const isActive = selected === item.key;
            return (
              <CustomTouchable
                key={item.key}
                onPress={() => onPressTab(item.key)}>
                <View style={style.wrap}>
                  <View style={style.icon_wrap}>
                    <CustomText
                      color={isActive ? 'primary' : 'basic'}
                      theme={isActive ? 'normal' : 'secondary'}
                      fs="Body"
                      fw="Bold">
                      {item.text}
                    </CustomText>
                  </View>
                  {isActive && <View style={style.bar} />}
                </View>
              </CustomTouchable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default DefalutTab;
