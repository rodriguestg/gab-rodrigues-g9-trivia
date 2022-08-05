// import * as actionTypes from '../actions/actionTypes';

import { LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.user.name,
      gravatarEmail: action.user.email,
    };
  default:
    return state;
  }
};

export default player;
