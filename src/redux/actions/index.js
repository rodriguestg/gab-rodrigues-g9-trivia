import * as actionsTypes from './actionTypes';

export const ADD_QUESTIONS = (param) => ({
  type: actionsTypes.FETCH_QUESTIONS,
  payload: param,
});

export const saveAnswer = (answer) => ({
  type: actionsTypes.GET_ANSWER,
  payload: answer,
});

export const loginAction = (user) => ({
  type: actionsTypes.LOGIN, user,
});

export const quizApi = (token) => async (dispatch) => {
  try {
    console.log(token);
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const json = await response.json();
    await dispatch(saveAnswer(json));

    return dispatch(ADD_QUESTIONS(json));
  } catch (error) {
    console.log(error);
  }
};

export const sumScore = (payload) => {
  const ten = 10;
  if (payload.difficulty === 'easy') payload.difficulty = 1;
  if (payload.difficulty === 'medium') payload.difficulty = 2;
  if (payload.difficulty === 'hard') payload.difficulty = 3;

  const score = (ten + payload.timer * payload.difficulty);
  return ({ type: actionsTypes.SUM_SCORE,
    score,
  });
};

export const logout = () => ({ type: actionsTypes.LOGOUT });
