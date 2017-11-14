import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  Platform,
  Button,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntryTextOnImage.style';
import SliderEntry from './components/SliderEntry';
import SliderEntryTextOnImage from './components/SliderEntryTextOnImage';
import styles, { colors } from './styles/index.style';
import { ENTRIES0 } from './static/entries';

const SLIDER_1_FIRST_ITEM = 0;

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  _renderItemTextOnImage({ item, index }) {
    return <SliderEntryTextOnImage data={item} even={(index + 1) % 2 === 0} />;
  }

  get example0() {
    const { activeSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>AVOIR</Text>
        <Text style={styles.subtitle}>
          je choisis l'émotion limitante que je veux libérer
        </Text>
        {/* <Text style={styles.title}>AVOIR : je choisis ce que je veux libérer</Text> */}
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={ENTRIES0}
          renderItem={this._renderItemTextOnImage}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
          onSnapToItem={index => this.setState({ activeSlide: index })}
          // onSnapToItem={(slideIndex) => this.onSlideChangeInfinite(slideIndex)}
        />
        <Pagination
          dotsLength={ENTRIES0.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
        />
        {/* { this.gradient } */}
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollviewContentContainer}
          indicatorStyle={'white'}
          scrollEventThrottle={200}
          alwaysBounceVertical={false}
          directionalLockEnabled={true}>
          {this.example0}
        </ScrollView>
        {/* <View style={{
                  // flex: 1
                }}>
                  <Button title="Je confirme" onPress={() => null}/>
                  <Button title="Je change" onPress={() => null}/>
                </View> */}
      </View>
    );
  }
}
