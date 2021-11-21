import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;

const MenuIcon = () => (
  <MaterialIcons
    name={'menu'}
    size={CENTER_ICON_SIZE}
    color={ICON_COLOR}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const MenuButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
      <TouchableOpacity onPress={onPress}>
        <MenuIcon />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
