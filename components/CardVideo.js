import React, { PropTypes } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Video, Constants } from 'expo';

import { videoEnded } from '../actions';

//HELP: https://github.com/expo/playlist-example

class CardVideo extends React.Component {
  shouldComponentUpdate(nextProps) {
    // return !nextProps.allVideosEnded;
    return false;
  }

  onEnd() {
    const { currentDeck, videoEnded } = this.props;
    videoEnded(currentDeck);
  }

  videoError() {
    console.log('error');
  }

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      if (status.didJustFinish && !status.isLooping) {
        const { currentDeck, videoEnded } = this.props;
        videoEnded(currentDeck);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _mountVideo = component => {
    this._video = component;
    // console.log('MOUNT VIDEO');
  };

  _onLoadStart = () => {
    // console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    // console.log(this._video);
    // console.log(`ON LOAD : ${JSON.stringify(status)}`);
    if (!Constants.isDevice) {
      this._video.playFromPositionAsync(25000);
    }
    // this._video.playFromPositionAsync(0);
  };

  render() {
    const {
      currentDeck,
      selectedCards,
      videoSources,
    } = this.props;

    const cardName = selectedCards[currentDeck];
    const videoSource = videoSources[currentDeck][cardName];

    return (
      <View style={{ flex: 1 }}>
        <Video
          ref={this._mountVideo}
          source={videoSource}
          style={[
            styles.backgroundVideo,
            // styles.video,
            // {
            //   opacity: this.state.showVideo ? 1.0 : 0.0,
            //   width: this.state.videoWidth,
            //   height: this.state.videoHeight,
            // },
          ]}
          resizeMode={Video.RESIZE_MODE_COVER}
          onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoad}
          onError={this._onError}
          onFullscreenUpdate={this._onFullscreenUpdate}
          onReadyForDisplay={this._onReadyForDisplay}
          // useNativeControls={this.state.useNativeControls}
          shouldPlay
        />
      </View>
    );
  }
}

const styles = {
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};

// state refers to the "current state" of your store.
const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.currentDeck,
  selectedCards: state.cards.selected,
  videoSources: state.cards.videoSources,
  allVideosEnded: state.cards.allVideosEnded,
});

const enhance = compose(
  connect(
    mapStateToProps,
    { videoEnded }
  ),
  // require('../utils/withLifecycleLogs').default
)

export default enhance(CardVideo);
