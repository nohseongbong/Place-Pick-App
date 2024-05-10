import {ScrollView, View} from 'react-native';

// component
import SvgComponent from '../SvgComponent/SvgComponent';
import CustomTouchable from '../customComponents/CustomTouchable';
import CustomText from '../customComponents/CustomText';

// image
import {SVG_ICON} from '../../../assets/images';

// styles
import style from './tab.style';
import {ColorType} from '../../constants/palette';

type ColorKeyType = keyof typeof ColorType.category;
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
            const isDisable = selected !== item.key;
            const isAll = item.key === 'all';
            const handleColor = isDisable
              ? 'basic'
              : isAll
              ? 'primary'
              : 'category';
            const handleTheme = isDisable
              ? 'secondary'
              : isAll
              ? 'normal'
              : (item.key as ColorKeyType);
            return (
              <CustomTouchable
                key={item.key}
                onPress={() => onPressTab(item.key)}>
                <View style={style.wrap}>
                  <View style={style.icon_wrap}>
                    <View style={style.icon}>
                      <SvgComponent
                        icon={item.key as keyof typeof SVG_ICON}
                        isStroke={isAll}
                        color={isAll ? 'primary' : 'category'}
                        theme={isAll ? 'normal' : (item.key as ColorKeyType)}
                        disableColor="basic"
                        disableTheme="secondary"
                        isDisable={isDisable}
                      />
                    </View>
                    <CustomText
                      color={handleColor}
                      theme={handleTheme}
                      fs="Body"
                      fw="Bold">
                      {item.text}
                    </CustomText>
                  </View>
                  {!isDisable && (
                    <View
                      style={[
                        style.bar,
                        {
                          backgroundColor: isAll
                            ? ColorType.primary.normal
                            : ColorType.category[item.key as ColorKeyType],
                        },
                      ]}
                    />
                  )}
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
