import React from '/utils/enhancedReact';
import { Image } from 'react-native';

export default ({ children, style }) => (
  <Image
    style={[
      {
        // backgroundColor: 'yellow',
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
