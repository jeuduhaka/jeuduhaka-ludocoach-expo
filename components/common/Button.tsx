import React, { ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

const Button = (
  props: TouchableOpacityProps & {
    children?: ReactNode;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
  }
) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      style={props.buttonStyle || buttonStyle}
      onPress={props.onPress}>
      <Text style={props.textStyle || textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<{
  textStyle: ViewStyle;
  buttonStyle: ViewStyle;
}>({
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    // flex: 1, //expands as much as content possibly can
    alignSelf: 'stretch',
    backgroundColor: '#014DA2',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
});

export { Button };
