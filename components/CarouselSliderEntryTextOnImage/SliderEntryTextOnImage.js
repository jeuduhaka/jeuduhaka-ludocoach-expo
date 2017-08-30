import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/SliderEntryTextOnImage.style';

export default class SliderEntryTextOnImage extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
        const { data: { title, subtitle, illustration }} = this.props;

        return (
            <Image
              source={typeof illustration === 'string' ? { uri: illustration } : illustration }
              style={styles.image}
            >
              <View style={styles.textContainer}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                >
                    { subtitle }
                </Text>
              </View>
            </Image>
        );
    }

    render () {
        const { data: { title, subtitle } } = this.props;

        return (
          <View style={styles.slideInnerContainer}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { alert(`You've clicked '${subtitle}'`); }}
              >
                <View style={styles.imageContainer}>
                    { this.image }
                </View>
            </TouchableOpacity>
          </View>
        );
    }
}
