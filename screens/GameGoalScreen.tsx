import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Button,
  View,
  TextStyle,
  ImageBackground,
} from 'react-native';
import { FontAwesome, Foundation } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import i18n from '../i18n';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import styles2 from './styles';

type GameGoalScreenRouteProp = RouteProp<RootStackParamList, 'GameGoal'>;
type GameGoalScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GameGoal'
>;

type Props = {
  route: GameGoalScreenRouteProp;
  navigation: GameGoalScreenNavigationProp;
};

function GameGoalScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles2.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <View style={styles2.navigationHeader}>
          <MenuButton
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <View
          style={[
            styles2.contentContainer,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {i18n.t('gameGoalTitle')}
          </Text>
          <Text
            style={[
              styles.blueText,
              styles.textWithPaddingTop,
              { fontWeight: 'bold' },
            ]}>
            {i18n.t('transformYourEnergy')}
          </Text>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            {i18n.t('gameGoalParagraph1Part1')}
          </Text>
          <Text style={styles.blackText}>
            {i18n.t('gameGoalParagraph1Part2')}
          </Text>
          <Text style={styles.blackText}>
            {i18n.t('gameGoalParagraph1Part3')}
          </Text>
          <View style={styles.textWithPaddingTop}>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorRed]}>A</Text>{' '}
              <Text style={styles.stepText}>{i18n.t('having')}</Text>
              {i18n.t('limitingEmotion')}
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorOrange]}>B</Text>
              {i18n.t('yaka')}
              <Text style={styles.stepText}> {i18n.t('doing')}</Text>
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorGreen]}>C</Text>{' '}
              <Text style={styles.stepText}>{i18n.t('being')}</Text>
              {i18n.t('better')}
            </Text>
          </View>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            {i18n.t('gameGoalParagraph2Part1')}
          </Text>
          <Text style={styles.blackText}>
            {i18n.t('gameGoalParagraph2Part2')}
          </Text>
          <Text style={styles.blackText}>
            {i18n.t('gameGoalParagraph2Part3')}{' '}
            <Text style={styles.manaText}>Mana</Text>{' '}
            {i18n.t('powerParenthesis')}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// class GameGoalScreen extends React.Component {
//   static navigationOptions = ({
//     screenProps,
//   }: {
//     screenProps: {
//       language: string;
//     };
//   }) => ({
//     headerMode: 'float',
//     drawerLabel: i18n.t('gameGoalTitle', {
//       locale: screenProps.language,
//     }),
//     drawerIcon: ({ tintColor }: { tintColor: string }) => (
//       <Foundation name="target" size={18} style={{ color: '#014DA2' }} />
//     ),
//   });

//   render() {
//     const navigation = useNavigation();

//     return (
//       <View style={{ flex: 1 }}>
//         <MenuButton
//           onPress={() => {
//             navigation.navigate('DrawerOpen');
//           }}
//         />
//         <BackgroundWave
//           style={{ justifyContent: 'center', alignItems: 'center' }}>
//           <Text
//             style={[
//               styles.blackText,
//               { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
//             ]}>
//             {i18n.t('gameGoalTitle')}
//           </Text>
//           <Text
//             style={[
//               styles.blueText,
//               styles.textWithPaddingTop,
//               { fontWeight: 'bold' },
//             ]}>
//             {i18n.t('transformYourEnergy')}
//           </Text>
//           <Text style={[styles.blackText, styles.textWithPaddingTop]}>
//             {i18n.t('gameGoalParagraph1Part1')}
//           </Text>
//           <Text style={styles.blackText}>
//             {i18n.t('gameGoalParagraph1Part2')}
//           </Text>
//           <Text style={styles.blackText}>
//             {i18n.t('gameGoalParagraph1Part3')}
//           </Text>
//           <View style={styles.textWithPaddingTop}>
//             <Text style={styles.blackText}>
//               <Text style={[styles.stepNumber, styles.colorRed]}>A</Text>{' '}
//               <Text style={styles.stepText}>{i18n.t('having')}</Text>
//               {i18n.t('limitingEmotion')}
//             </Text>
//             <Text style={styles.blackText}>
//               <Text style={[styles.stepNumber, styles.colorOrange]}>B</Text>
//               {i18n.t('yaka')}
//               <Text style={styles.stepText}> {i18n.t('doing')}</Text>
//             </Text>
//             <Text style={styles.blackText}>
//               <Text style={[styles.stepNumber, styles.colorGreen]}>C</Text>{' '}
//               <Text style={styles.stepText}>{i18n.t('being')}</Text>
//               {i18n.t('better')}
//             </Text>
//           </View>
//           <Text style={[styles.blackText, styles.textWithPaddingTop]}>
//             {i18n.t('gameGoalParagraph2Part1')}
//           </Text>
//           <Text style={styles.blackText}>
//             {i18n.t('gameGoalParagraph2Part2')}
//           </Text>
//           <Text style={styles.blackText}>
//             {i18n.t('gameGoalParagraph2Part3')}{' '}
//             <Text style={styles.manaText}>Mana</Text>{' '}
//             {i18n.t('powerParenthesis')}
//           </Text>
//         </BackgroundWave>
//       </View>
//     );
//   }
// }

const textfontSize: TextStyle = {
  fontSize: 16,
  textAlign: 'center',
};
const styles = StyleSheet.create({
  blueText: {
    ...textfontSize,
    color: '#014DA2',
  },
  blackText: {
    ...textfontSize,
    color: '#221E1F',
  },
  textWithPaddingTop: {
    paddingTop: 10,
  },
  manaText: {
    color: '#014DA2',
    fontFamily: 'charcuterie-sans-inline',
  },
  stepNumber: {
    fontFamily: 'european-pi-one',
  },
  colorRed: {
    color: '#B8282E',
  },
  colorOrange: {
    color: '#F7941C',
  },
  colorGreen: {
    color: '#39B549',
  },
  stepText: {
    fontWeight: 'bold',
  },
});

export default GameGoalScreen;
