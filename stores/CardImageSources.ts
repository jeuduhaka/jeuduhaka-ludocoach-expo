import { number } from 'prop-types';
import { GreenCardName, CardDeckName, AssetsSourcesType } from '../types';

type GiftCardsSources = {
  [key in 'en' | 'fr']: {
    [key in GreenCardName]: number;
  };
};

type FrontCardsSources = AssetsSourcesType;

export default {
  logo: require('../assets/images/jeu-du-haka-logo-200x200.png'),
  wave: require('../assets/images/fond-bleu-vague-1980x1980.jpg'),
  gifts: {
    en: {
      love: require('../assets/images/giftcards/en/gift-card-love-en.jpg'),
      calm: require('../assets/images/giftcards/en/gift-card-calm-en.jpg'),
      confidence: require('../assets/images/giftcards/en/gift-card-confidence-en.jpg'),
      energy: require('../assets/images/giftcards/en/gift-card-energy-en.jpg'),
      'self-esteem': require('../assets/images/giftcards/en/gift-card-self-esteem-en.jpg'),
      strength: require('../assets/images/giftcards/en/gift-card-strength-en.jpg'),
      joy: require('../assets/images/giftcards/en/gift-card-joy-en.jpg'),
      peace: require('../assets/images/giftcards/en/gift-card-peace-en.jpg'),
    },
    fr: {
      love: require('../assets/images/giftcards/fr/gift-card-love-fr.jpg'),
      calm: require('../assets/images/giftcards/fr/gift-card-calm-fr.jpg'),
      confidence: require('../assets/images/giftcards/fr/gift-card-confidence-fr.jpg'),
      energy: require('../assets/images/giftcards/fr/gift-card-energy-fr.jpg'),
      'self-esteem': require('../assets/images/giftcards/fr/gift-card-self-esteem-fr.jpg'),
      strength: require('../assets/images/giftcards/fr/gift-card-strength-fr.jpg'),
      joy: require('../assets/images/giftcards/fr/gift-card-joy-fr.jpg'),
      peace: require('../assets/images/giftcards/fr/gift-card-peace-fr.jpg'),
    },
  },
  back: {
    red: require('../assets/images/cards/back/red/back-card-red.png'),
    orange: require('../assets/images/cards/back/orange/back-card-orange.png'),
    green: require('../assets/images/cards/back/green/back-card-green.png'),
  },
  front: {
    red: {
      abandonment: require('../assets/images/cards/front/red/abandonment/card-red-abandonment-no-text.png'),
      anger: require('../assets/images/cards/front/red/anger/card-red-anger-no-text.png'),
      disgust: require('../assets/images/cards/front/red/disgust/card-red-disgust-no-text.png'),
      doubt: require('../assets/images/cards/front/red/doubt/card-red-doubt-no-text.png'),
      threat: require('../assets/images/cards/front/red/threat/card-red-threat-no-text.png'),
      fear: require('../assets/images/cards/front/red/fear/card-red-fear-no-text.png'),
      sadness: require('../assets/images/cards/front/red/sadness/card-red-sadness-no-text.png'),
      violence: require('../assets/images/cards/front/red/violence/card-red-violence-no-text.png'),
      'joker-red': require('../assets/images/cards/front/red/joker/card-red-joker-no-text.png'),
    },
    orange: {
      action: require('../assets/images/cards/front/orange/action/card-orange-action-no-text.png'),
      courage: require('../assets/images/cards/front/orange/courage/card-orange-courage-no-text.png'),
      movement: require('../assets/images/cards/front/orange/movement/card-orange-movement-no-text.png'),
      patience: require('../assets/images/cards/front/orange/patience/card-orange-patience-no-text.png'),
      preparation: require('../assets/images/cards/front/orange/preparation/card-orange-preparation-no-text.png'),
      prevention: require('../assets/images/cards/front/orange/prevention/card-orange-prevention-no-text.png'),
      protection: require('../assets/images/cards/front/orange/protection/card-orange-protection-no-text.png'),
      unity: require('../assets/images/cards/front/orange/unity/card-orange-unity-no-text.png'),
      'joker-orange': require('../assets/images/cards/front/orange/joker/card-orange-joker-no-text.png'),
    },
    green: {
      love: require('../assets/images/cards/front/green/love/card-green-love-no-text.png'),
      calm: require('../assets/images/cards/front/green/calm/card-green-calm-no-text.png'),
      confidence: require('../assets/images/cards/front/green/confidence/card-green-confidence-no-text.png'),
      energy: require('../assets/images/cards/front/green/energy/card-green-energy-no-text.png'),
      'self-esteem': require('../assets/images/cards/front/green/self-esteem/card-green-self-esteem-no-text.png'),
      strength: require('../assets/images/cards/front/green/strength/card-green-strength-no-text.png'),
      joy: require('../assets/images/cards/front/green/joy/card-green-joy-no-text.png'),
      peace: require('../assets/images/cards/front/green/peace/card-green-peace-no-text.png'),
      'joker-green': require('../assets/images/cards/front/green/joker/card-green-joker-no-text.png'),
    },
  },
};
