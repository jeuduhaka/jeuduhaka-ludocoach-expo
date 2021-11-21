import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import {Picker} from '@react-native-picker/picker';

function LanguageFlagPicker() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  return (
    <View
      style={{
        position: 'absolute',
        top: 1,
        right: 5,
        width: 150
      }}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(newLanguage) => {
          setSelectedLanguage(newLanguage);
          i18n.changeLanguage(newLanguage);
        }}
      >
        <Picker.Item label="🇺🇸 English" value="en" />
        <Picker.Item label="🇫🇷 Français" value="fr" />
        <Picker.Item label="🇨🇳 中国人" value="zh" />
      </Picker>
    </View>
  );
}

export { LanguageFlagPicker };
