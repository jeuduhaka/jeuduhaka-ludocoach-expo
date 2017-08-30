/**
 * @flow
 */

import React, { PropTypes } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Video } from 'expo';

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

  _callback = status => {
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

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setCallback(null);
      this.playbackInstance = null;
    }

    const {
      currentDeck,
      selectedCards,
      videoSources,
    } = this.props;

    const cardName = selectedCards[currentDeck];
    const videoURI = videoSources[currentDeck][cardName];
    console.log(videoURI);
    const source = { uri: videoURI };

    this._video.setCallback(this._callback);
    await this._video.loadAsync(source, {}, false);
    this.playbackInstance = this._video;
    const status = await this._video.getStatusAsync();

    // this._updateScreenForLoading(false);
  }

  _mountVideo = component => {
    this._video = component;
    // console.log('MOUNT VIDEO');
    this._loadNewPlaybackInstance(false);
  };

  _onLoadStart = () => {
    console.log(`ON LOAD START`);
  };

  _onLoad = status => {
    // console.log(this._video);
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
    // this._video.playFromPositionAsync(30000);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Video
          ref={this._mountVideo}
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
          // callback={this._callback}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoad}
          onError={this._onError}
          onFullscreenUpdate={this._onFullscreenUpdate}
          onReadyForDisplay={this._onReadyForDisplay}
          useNativeControls={true}
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
