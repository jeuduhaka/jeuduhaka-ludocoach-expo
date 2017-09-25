import * as ActionTypes from './types';

export const languageChanged = language => {
  return {
    type: ActionTypes.LANGUAGE_CHANGED,
    language,
  };
};

export const gameModeChosen = gameMode => {
  return {
    type: ActionTypes.GAME_MODE_CHOSEN,
    gameMode,
  };
};

export const secondScreen1MovePassed = () => {
  return {
    type: ActionTypes.SECOND_SCREEN_1_MOVE_PASSED,
  };
};

export const secondScreen3MovesPassed = () => {
  return {
    type: ActionTypes.SECOND_SCREEN_3_MOVES_PASSED,
  };
};

export const deckPressed = currentDeck => {
  return {
    type: ActionTypes.DECK_PRESSED,
    currentDeck,
  };
};

export const cardPressed = (cardName, gameMode) => {
  return {
    type: ActionTypes.CARD_PRESSED,
    cardName,
    gameMode,
  };
};

function nextDeck(currentDeck) {
  switch (currentDeck) {
    case 'red':
      return 'orange';
    case 'orange':
      return 'green';
    case 'green':
      return 'red';
    default:
      return 'red';
  }
}
export const cardConfirmed = currentDeck => {
  if (currentDeck !== 'green') {
    return {
      type: ActionTypes.CARD_CONFIRMED,
      nextDeck: nextDeck(currentDeck),
    };
  }

  return {
    type: ActionTypes.ALL_CARDS_CONFIRMED,
    nextDeck: nextDeck(currentDeck),
  };
};

export const cardCancelled = () => {
  return {
    type: ActionTypes.CARD_CANCELLED,
  };
};

export const afterCardsButtonPressed = currentDeck => {
  return {
    type: ActionTypes.AFTER_CARDS_BUTTON_PRESSED,
  };
};

export const selectedCardPressed = () => {
  return {
    type: ActionTypes.SELECTED_CARD_PRESSED,
  };
};

export const videoEnded = currentDeck => {
  if (currentDeck !== 'green') {
    return {
      type: ActionTypes.VIDEO_ENDED,
      nextDeck: nextDeck(currentDeck),
    };
  }

  return {
    type: ActionTypes.ALL_VIDEOS_ENDED,
  };
};

export const backHome = () => {
  return {
    type: ActionTypes.BACK_HOME,
  };
};

export const goBack = () => {
  return {
    type: ActionTypes.GO_BACK,
  };
};
