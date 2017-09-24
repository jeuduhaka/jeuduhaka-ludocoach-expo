import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  allCardsChosen: false,
  allVideosEnded: false,
  currentDeck: 'red',
  cardConfirmed: false,
  videoLaunched: false,
  selected: {
    red: '',
    orange: '',
    green: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  console.log(state.currentDeck);
  switch (action.type) {
    case ActionTypes.GAME_MODE_CHOSEN:
      if (action.gameMode === ActionTypes.GAME_MODE_1_MOVE) {
        return {
          ...state,
          currentDeck: 'green'
        };
      }
      return state;
    case ActionTypes.DECK_PRESSED:
      // console.log(action);
      return {
        ...state,
        currentDeck: action.currentDeck,
        allVideosEnded: false
      };
    case ActionTypes.CARD_PRESSED:
      return {
        ...state,
        selected: {
          ...state.selected,
          [state.currentDeck]: action.cardName
        },
        cardConfirmed: false
      };
    // case ActionTypes.CARD_CANCELLED:
    //   return {
    //     ...state,
    //     selected: {
    //       ...state.selected,
    //       [state.currentDeck]: ''
    //     }
    //   };
    case ActionTypes.CARD_CONFIRMED:
      return {
        ...state,
        currentDeck: action.nextDeck,
        allCardsChosen: state.currentDeck === 'green',
        cardConfirmed: true
      };
    case ActionTypes.ALL_CARDS_CONFIRMED:
      return {
        ...state,
        currentDeck: action.nextDeck,
        allCardsChosen: true,
        cardConfirmed: true
      };
    case ActionTypes.AFTER_CARDS_BUTTON_PRESSED:
      return {
        ...state,
        cardConfirmed: false
      };
    case ActionTypes.SELECTED_CARD_PRESSED:
      return {
        ...state,
        videoLaunched: true
      };
    case ActionTypes.VIDEO_ENDED:
      return {
        ...state,
        currentDeck: action.nextDeck,
        videoLaunched: false
      };
    case ActionTypes.ALL_VIDEOS_ENDED:
      return {
        ...state,
        allVideosEnded: true,
        videoLaunched: false
      };
    default:
      return state;
  }
};
