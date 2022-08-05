import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  questions: [],
  resposta: [],
  index: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case actionTypes.FETCH_QUESTIONS:
    return { ...state,
      questions: payload };
    /*   case actionTypes.GET_ANSWER:

*/
  default:
    return state;
  }
};

export default gameReducer;
