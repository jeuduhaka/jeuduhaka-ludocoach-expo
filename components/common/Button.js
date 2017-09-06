import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, ...otherProps }) => {
  const { buttonStyle, textStyle } = { ...styles, ...otherProps.style };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1, //expands as much as content possibly can
    alignSelf: 'stretch',
    backgroundColor: '#014DA2',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
