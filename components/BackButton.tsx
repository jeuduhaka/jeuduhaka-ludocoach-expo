import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

const CENTER_ICON_SIZE = 36;

const HomeIcon = ({ tintColor }: { tintColor: string }) => (
  <MaterialIcons
    name={'home'}
    size={CENTER_ICON_SIZE}
    color={tintColor}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const BackButton = ({ tintColor }: { tintColor: string }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        //zIndex needed to be on top of Video
        zIndex: 2,
      }}>
      <HeaderBackButton
        onPress={() => {
          navigation.goBack();
        }}
        tintColor={tintColor}
      />
    </View>
  );
};

export default BackButton;
