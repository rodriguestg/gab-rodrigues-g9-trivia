import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.LOGIN:
    return {
      ...state,
      name: action.user.name,
      gravatarEmail: action.user.email,
    };
  case actionTypes.SUM_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};

export default player;
