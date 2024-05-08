import {View} from 'react-native';

// components
import SvgComponent from '../svg-component/SvgComponent';
import CustomTouchable from '../customComponents/CustomTouchable';
import CustomText from '../customComponents/CustomText';

// images
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

function InfoTab({list, selected, onPressTab}: Props) {
  return (
    <View style={style.info_container}>
      {list.map(item => {
        const isActive = selected === item.key;
        return (
          <CustomTouchable
            style={style.tab}
            key={item.key}
            onPress={() => onPressTab(item.key)}>
            <View style={style.info_icon}>
              <SvgComponent
                icon={item.key as keyof typeof SVG_ICON}
                isStroke={item.key === 'all'}
                color="basic"
                theme="secondary"
                activeColor="basic"
                activeTheme="body"
                isActive={isActive}
              />
            </View>
            <CustomText
              color={isActive ? 'basic' : 'basic'}
              theme={isActive ? 'body' : 'secondary'}
              fs="Body"
              fw="Bold">
              {item.text}
            </CustomText>
            {isActive && <View style={style.info_bar} />}
          </CustomTouchable>
        );
      })}
    </View>
  );
}

export default InfoTab;
