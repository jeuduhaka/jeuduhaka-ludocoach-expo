import React from 'react';
import { Text, Image, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class ThanksScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/notification-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

ThanksScreen.navigationOptions = {
  drawerLabel: 'Remerciements',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  )
};

export default ThanksScreen;
//
//
// import React from 'react';
// import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
// import { DrawerNavigator } from 'react-navigation';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SampleText from './SampleText';
//
// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView style={styles.container}>
//     <SampleText>{banner}</SampleText>
//     <Button
//       onPress={() => navigation.navigate('DrawerOpen')}
//       title="Open drawer"
//     />
//     <Button onPress={() => navigation.goBack(null)} title="Go back" />
//   </ScrollView>
// );
//
// const InboxScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
// );
// InboxScreen.navigationOptions = {
//   drawerLabel: 'Inbox',
//   drawerIcon: ({ tintColor }) => (
//     <MaterialIcons
//       name="move-to-inbox"
//       size={24}
//       style={{ color: tintColor }}
//     />
//   ),
// };
//
// const DraftsScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
// );
// DraftsScreen.navigationOptions = {
//   drawerLabel: 'Drafts',
//   drawerIcon: ({ tintColor }) => (
//     <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
//   ),
// };
//
// const DrawerExample = DrawerNavigator(
//   {
//     Inbox: {
//       path: '/',
//       screen: InboxScreen,
//     },
//     Drafts: {
//       path: '/sent',
//       screen: DraftsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Drafts',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//   }
// );
//
// const styles = StyleSheet.create({
//   container: {
//     marginTop: Platform.OS === 'ios' ? 20 : 0,
//   },
// });
//
// export default DrawerExample;
