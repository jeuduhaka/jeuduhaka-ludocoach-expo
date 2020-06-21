import React from 'react';
import { Text, StyleProp, ViewProps } from 'react-native';

export class MonoText extends React.Component<{
  style: StyleProp<ViewProps>;
}> {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'space-mono' }]}
      />
    );
  }
}
