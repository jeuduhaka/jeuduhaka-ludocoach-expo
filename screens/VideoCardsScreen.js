import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Card from '../components/Card';
import RowCards from '../components/RowCards';

import { cardPressed } from '../actions';

import styles from './screens.style';

class VideoCardsScreen extends React.Component {
  constructor(props) {
    super(props);

    this._goToVideo = this._goToVideo.bind(this);
  }

  _goToVideo = videoId => {
    const videoName = this.props.rows[videoId].name;
    const videoSource = this.props.rows[videoId].videoSource;
    const path = '/video/:videoId';

    this.props.navigation.navigate('Video', {
      videoId,
      videoName,
      videoSource
    });
  };

  _renderCardRows() {
    const { cardImageSources, currentDeck, cardPressed } = this.props;

    const currentImageSources = Object.entries(
      cardImageSources.front[currentDeck]
    );
    const rows = [];

    const cards = currentImageSources.map(([cardName, imageSource]) => (
      <Card
        key={cardName}
        name={cardName}
        imageSource={imageSource}
        // onPress={cardPressed}
        onPress={this._goToVideo}
      />
    ));

    const NB_CARDS_PER_ROW = 3;

    for (let i = 0; i < NB_CARDS_PER_ROW; ++i) {
      rows.push(
        <RowCards key={i} style={styles.rowStyle}>
          {cards.slice(
            i * NB_CARDS_PER_ROW,
            i * NB_CARDS_PER_ROW + NB_CARDS_PER_ROW
          )}
        </RowCards>
      );
    }

    return rows;
  }

  render() {
    const screenBackgroundStyle = this.props.style
      ? this.props.style.screenBackground
        ? this.props.style.screenBackground
        : {}
      : {};
    return (
      <View style={[styles.container, screenBackgroundStyle]}>
        {this._renderCardRows()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // currentDeck: state.cards.currentDeck,
  cardConfirmed: state.cards.cardConfirmed,
  allCardsChosen: state.cards.allCardsChosen,
  cardImageSources: state.cards.imageSources
});

const enhance = compose(
  connect(mapStateToProps, { cardPressed })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(VideoCardsScreen);
