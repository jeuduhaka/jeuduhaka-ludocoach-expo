import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import { Button } from './common';
import { gameModeChosen } from '../actions';

const GameModeButton = ({
  gameMode,
  gameModeChosen,
  children,
  ...otherProps
}) => {
  return (
    <Button onPress={() => gameModeChosen(gameMode)} {...otherProps}>
      {children}
    </Button>
  );
};

GameModeButton.propTypes = {
  gameModeChosen: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  undefined,
  { gameModeChosen }
)(GameModeButton);
