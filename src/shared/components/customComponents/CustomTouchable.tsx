import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const CustomTouchable = ({style, children, ...props}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[style]} activeOpacity={0.3} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
