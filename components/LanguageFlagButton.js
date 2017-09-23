import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import I18n from '../i18n/';
import App from '../App';
import { languageChanged } from '../actions/';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 30;

const flags = {
  en:
    'data:image/png;base64,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',
  fr:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAACFQTFRFACZ/AymBABl3qbbU////+/z9//z8+7G58gok8xsz8xgwxtlaVAAAAAFiS0dEBI9o2VEAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAeSURBVCjPY2AAAUZlVxcgSKmYtQoEGEYFRwVpKQgAg3q7n/McyNsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMDdUMTM6MTQ6NDcrMDI6MDDY2ztBAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTEwLTA3VDEzOjE0OjQ3KzAyOjAwqYaD/QAAAABJRU5ErkJggg=='
};

const otherFlagMap = {
  fr: 'en',
  en: 'fr'
};
const getOtherFlag = currentLocale => otherFlagMap[currentLocale];

class LanguageFlagButton extends React.Component {
  constructor() {
    super();

    const locale = I18n.locale.split('-')[0];
    if (I18n.isLocaleSupported(locale)) {
      this.state.currentFlag = getOtherFlag(locale);
    } else {
      this.state.currentFlag = getOtherFlag(I18n.defaultLocale);
    }
  }

  state = {
    currentFlag: ''
  };

  render() {
    const { onPress, languageChanged } = this.props;

    return (
      <View
        style={{
          position: 'absolute',
          top: 8,
          right: 5,
          flexDirection: 'row',
          //zIndex needed to be on top of Video
          zIndex: 2
        }}
      >
        <TouchableOpacity
          onPress={() => {
            const otherFlag = getOtherFlag(this.state.currentFlag);
            I18n.locale = this.state.currentFlag;
            this.state.currentFlag = otherFlag;

            languageChanged(I18n.locale);
            onPress && onPress();
          }}
        >
          <Image
            style={{
              width: CENTER_ICON_SIZE,
              height: CENTER_ICON_SIZE * (2 / 3)
            }}
            source={{ uri: flags[this.state.currentFlag] }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  gameMode: state.gameMode,
  language: state.language
});

const enhance = compose(connect(mapStateToProps, { languageChanged }));

export default enhance(LanguageFlagButton);
