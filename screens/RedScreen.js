import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ReactNativeComponentTree
} from 'react-native';

import styles from './screens.style';
import { slugify } from '../utilities/helpers';
import VideoScreen from './VideoScreen';
import rowsDataRed from '../stores/rowsDataRed';

const TouchableListRow = props => {
  const rowPressed = () => {
    props.onPress(props.id);
  };
  return (
    <TouchableOpacity style={styles.listRowButton} onPress={rowPressed}>
      <View style={styles.listRowContainer}>
        <Text style={styles.listRowText}>{props.data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default class RedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'AVOIR'
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/icons/app-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  constructor(props) {
    super(props);

    this._goToVideo = this._goToVideo.bind(this);
  }

  _goToVideo = videoSlug => {
    console.log(videoSlug);
    // const key = ReactNativeComponentTree.getInstanceFromNode(
    //   event.currentTarget
    // )._currentElement.props.key;
    // console.log(key);
    // const { path, params, screen } = ExampleRoutes[routeName];
    // const videoName = slugify(event.target.key);
    // // const params = {};
    // const path = '/video/:videoName';
    // // // const { router } = VideoScreen;
    // // // const action = path && router.getActionForPathAndParams(path, params);
    // // // this.props.navigation.navigate(routeName, {}, action);
    // this.props.navigation.navigate('Video', { videoName });
  };

  _renderRow = (rowKey, rowData) => {
    return (
      <TouchableListRow
        key={rowKey}
        id={rowKey}
        onPress={this._goToVideo}
        data={rowData}
      />
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        {rowsDataRed &&
          Object.keys(rowsDataRed).map(rowKey => {
            return this._renderRow(rowKey, rowsDataRed[rowKey]);
          })}
      </View>
    );
  }
}
