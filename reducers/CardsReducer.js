import * as ActionTypes from '../actions/types';
import cardImageSources from './CardImageSources';
import cardVideoSources from './CardVideoSourcesLocal';
import gesturesTexts from './GesturesTexts';

const INITIAL_STATE = {
  allCardsChosen: false,
  allVideosEnded: false,
  currentDeck: 'red',
  imageSources: cardImageSources,
  videoSources: cardVideoSources,
  gesturesTexts,
  cardConfirmed: false,
  selected: {
    red: '',
    orange: '',
    green: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.DECK_PRESSED:
      // console.log(action);
      return {
        ...state,
        currentDeck: action.currentDeck,
        allVideosEnded: false,
      };
    case ActionTypes.CARD_PRESSED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [state.currentDeck]: action.cardName,
        },
        cardConfirmed: false,
      };
    case ActionTypes.CARD_CANCELLED:
    return {
      ...state,
      selected: {
        ...state.selected,
        [state.currentDeck]: ''
      }
    };
    case ActionTypes.CARD_CONFIRMED:
      return {
        ...state,
        currentDeck: action.nextDeck,
        allCardsChosen: state.currentDeck === 'green',
        cardConfirmed: true,
      };
    case ActionTypes.VIDEO_ENDED:
      return {
        ...state,
        currentDeck: action.nextDeck,
      };
    case ActionTypes.ALL_VIDEOS_ENDED:
      return {
        ...state,
        allVideosEnded: true,
      };
    default:
      return state;
  }
};
