import React from 'react';
import {TextInputProps, TextInput, StyleSheet} from 'react-native';
import {palette} from '../../constants/palette';

interface Props extends TextInputProps {
  style?: object;
  refProp?: React.RefObject<TextInput>;
}

const CustomTextInput = ({style, refProp, ...props}: Props) => {
  const styles = StyleSheet.create({
    input: {
      color: palette.TEXT,
      borderWidth: 1,
      borderRadius: 2,
    },
  });

  return <TextInput ref={refProp} placeholderTextColor={'#757779'} style={[styles.input, style]} {...props} />;
};
export default CustomTextInput;
