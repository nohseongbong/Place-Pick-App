import {ScrollView, View} from 'react-native';

// component
import SvgComponent from '../svg-component/SvgComponent';
import CustomTouchable from '../customComponents/CustomTouchable';
import CustomText from '../customComponents/CustomText';

// image
import {SVG_ICON} from '../../../assets/images';

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

function DefalutIconTab({list, selected, onPressTab}: Props) {
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
                    <View style={style.icon}>
                      <SvgComponent
                        icon={item.key as keyof typeof SVG_ICON}
                        isStroke={item.key === 'all'}
                        color="basic"
                        theme="secondary"
                        activeColor="primary"
                        activeTheme="normal"
                        isActive={isActive}
                      />
                    </View>
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

export default DefalutIconTab;
