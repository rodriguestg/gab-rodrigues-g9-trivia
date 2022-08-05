import { FETCH_QUESTIONS, GET_ANSWER } from './actionTypes';

export const ADD_QUESTIONS = (param) => ({
  type: FETCH_QUESTIONS,
  payload: param,
});

export const saveAnswer = (answer) => ({
  type: GET_ANSWER,
  payload: answer,
});

export const quizApi = (token) => async (dispatch) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const json = await response.json();
    await dispatch(saveAnswer(json));

    return dispatch(ADD_QUESTIONS(json.results));
  } catch (error) {
    console.log(error);
  }
};
