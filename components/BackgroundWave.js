import React from '/utils/enhancedReact';
import { Image } from 'react-native';

export default ({ children }) => (
  <Image
    style={{
      // backgroundColor: 'yellow',
      resizeMode: 'cover',
      flex: 1,
      width: undefined,
      height: undefined,
    }}
    source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
    {children}
  </Image>
);
