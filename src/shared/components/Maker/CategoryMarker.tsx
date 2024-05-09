// components
import {View} from 'react-native';
import SvgComponent from '../svg-component/SvgComponent';

// styles
import style from './marker.style';
import shadowStyle from '../../styles/shadow';

// constants
import {CategoryColor} from '../../constants/palette';

// images
import {SVG_ICON} from '../../../assets/images';

interface Props {
  icon: keyof typeof CategoryColor;
}

function CategoryMarker({icon}: Props) {
  return (
    <View style={[style.container, shadowStyle.marker]}>
      <View style={[style.bubble, shadowStyle.marker]}>
        <SvgComponent icon={icon as keyof typeof SVG_ICON} />
      </View>
      <View style={[style.tail]} />
    </View>
  );
}

export default CategoryMarker;
