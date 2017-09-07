import * as ActionTypes from './types';

export const gameModeChosen = gameMode => {
  return {
    type: ActionTypes.GAME_MODE_CHOSEN,
    gameMode
  };
};

export const deckPressed = currentDeck => {
  return {
    type: ActionTypes.DECK_PRESSED,
    currentDeck
  };
};

export const cardPressed = cardName => {
  return {
    type: ActionTypes.CARD_PRESSED,
    cardName
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
  console.log(currentDeck);

  if (currentDeck !== 'green') {
    return {
      type: ActionTypes.CARD_CONFIRMED,
      nextDeck: nextDeck(currentDeck)
    };
  }

  return {
    type: ActionTypes.ALL_CARDS_CONFIRMED,
    nextDeck: nextDeck(currentDeck)
  };
};

export const cardCancelled = () => {
  return {
    type: ActionTypes.CARD_CANCELLED
  };
};

export const selectedCardPressed = () => {
  return {
    type: ActionTypes.SELECTED_CARD_PRESSED
  };
};

export const ludocoachLaunched = () => {
  return {
    type: ActionTypes.LUDOCOACH_LAUNCHED
  };
};

export const videoEnded = currentDeck => {
  if (currentDeck !== 'green') {
    return {
      type: ActionTypes.VIDEO_ENDED,
      nextDeck: nextDeck(currentDeck)
    };
  }

  return {
    type: ActionTypes.ALL_VIDEOS_ENDED
  };
};
