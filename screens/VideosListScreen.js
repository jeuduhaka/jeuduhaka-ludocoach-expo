import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './screens.style';

const TouchableListRow = props => {
  const rowPressed = () => {
    props.onPress(props.id);
  };

  const propRowStyle = props.style && props.style.row ? props.style.row : {};
  const propRowTextStyle =
    props.style && props.style.rowText ? props.style.rowText : {};

  return (
    <TouchableOpacity style={styles.listRowButton} onPress={rowPressed}>
      <View style={[styles.listRowContainer, propRowStyle]}>
        <Text style={[styles.listRowText, propRowTextStyle]}>
          {props.data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default class VideosListScreen extends React.Component {
  constructor(props) {
    super(props);

    this._goToVideo = this._goToVideo.bind(this);
  }

  _goToVideo = videoId => {
    // const key = ReactNativeComponentTree.getInstanceFromNode(
    //   event.currentTarget
    // )._currentElement.props.key;
    // console.log(key);
    // const { path, params, screen } = ExampleRoutes[routeName];
    const videoName = this.props.rows[videoId].name;
    const videoSource = this.props.rows[videoId].videoSource;
    // // const params = {};
    const path = '/video/:videoId';
    // // // const { router } = VideoScreen;
    // // // const action = path && router.getActionForPathAndParams(path, params);
    // // // this.props.navigation.navigate(routeName, {}, action);
    this.props.navigation.navigate('Video', {
      videoId,
      videoName,
      videoSource
    });
  };

  _renderRow = (rowKey, rowData) => {
    return (
      <TouchableListRow
        key={rowKey}
        id={rowKey}
        onPress={this._goToVideo}
        data={rowData}
        style={this.props.style}
      />
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        {this.props.rows &&
          Object.keys(this.props.rows).map(rowKey => {
            return this._renderRow(rowKey, this.props.rows[rowKey]);
          })}
      </View>
    );
  }
}
