import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export default function cacheAssetsAsync({
  images = [],
  videos = [],
  fonts = []
}) {
  return Promise.all([
    ...cacheImages(images),
    ...cacheVideos(videos),
    ...cacheFonts(fonts)
  ]);
}

function cacheVideos(videos) {
  return Object.values(videos).map(video => {
    // console.log(typeof video);
    if (typeof video === 'object') {
      return cacheVideos(video);
    }

    const videoAsset = Asset.fromModule(video);
    // const resolve = () => console.log('toto');
    // videoAsset.downloadCallbacks.push({ resolve });

    return videoAsset.downloadAsync();
  });
}

function cacheImages(images) {
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      // console.log('image string');
      return Image.prefetch(image);
    } else if (typeof image === 'object') {
      // console.log('image object');
      return cacheImages(image);
    }

    // console.log('image module');
    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
