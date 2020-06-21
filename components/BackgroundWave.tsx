import React from 'react';
import { Image } from 'react-native';

// TODO remove any
export default ({ children, style }: { children: any; style?: any }) => (
  <Image
    style={[
      {
        resizeMode: 'cover',
        flex: 1,
        width: undefined,
        height: undefined,
      },
      style,
    ]}
    source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
    {children}
  </Image>
);
