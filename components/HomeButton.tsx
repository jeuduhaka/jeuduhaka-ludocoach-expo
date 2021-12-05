import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CommonActions, useNavigation } from '@react-navigation/native';

const CENTER_ICON_SIZE = 36;

const HomeIcon = ({ tintColor }: { tintColor: string }) => (
  <MaterialIcons
    name={'home'}
    size={CENTER_ICON_SIZE}
    color={tintColor}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const resetAction = CommonActions.reset({
  index: 0,
  routes: [{ name: 'HomeWithDrawer' }],
});

const HomeButton = ({
  tintColor,
}: {
  tintColor: string;
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 10,
        flexDirection: 'row',
        //zIndex needed to be on top of Video
        zIndex: 2,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(resetAction);
        }}
        style={{
          marginVertical: 5,
        }}>
        <HomeIcon tintColor={tintColor} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
