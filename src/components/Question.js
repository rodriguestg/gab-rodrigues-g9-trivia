import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../question.css';
import { connect } from 'react-redux';
import { sumScore } from '../redux/actions';

class Question extends Component {
  constructor() {
    super();

    this.state = {
      sortedQuestions: [],
      indexCorrectAnswer: 0,
      correct: 'vazio',
      failed: 'vazio',
      timer: 30,
      intervalState: 0,
      timeOutState: 0,
    };
  }

  componentDidMount() {
    this.shuffleAnswers();
  }

  shuffleAnswers = (event) => {
    console.log(event);
    const { question } = this.props;
    const answers = [...question.incorrect_answers, question.correct_answer];
    const shuffled = answers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    this.setState({
      sortedQuestions: shuffled,
      indexCorrectAnswer: shuffled.indexOf(question.correct_answer),
    });
    this.timer();
  }

  answerSelected = ({ target }) => {
    const { sortedQuestions, indexCorrectAnswer, timer } = this.state;
    const { sumScoreDispatch, question, isAnswered } = this.props;
    sortedQuestions.forEach((_answer, index) => (
      index === indexCorrectAnswer
        ? this.setState({
          correct: 'green',
        })
        : this.setState({
          failed: 'red',
        })
    ));
    if (target.id === 'correct') {
      sumScoreDispatch({
        timer, difficulty: question.difficulty,
      });
    }
    isAnswered();
  }

  clearTimer = () => {
    const { timeOutState, intervalState } = this.state;
    console.log(timeOutState, intervalState);
    this.setState({ timer: 30, correct: 'vazio', failed: 'vazio' });
    clearInterval(intervalState);
    clearTimeout(timeOutState);
  }

  timer = () => {
    this.clearTimer();
    const timeOutNumber = 30000;
    const oneSecond = 1000;
    const interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, oneSecond);

    const timeOut = setTimeout(() => {
      clearInterval(interval);
    }, timeOutNumber);

    this.setState({
      intervalState: interval,
      timeOutState: timeOut,
    });
  }

  render() {
    const { question, nextQuestionOnClick, answered } = this.props;
    const { sortedQuestions, indexCorrectAnswer,
      correct, failed, timer } = this.state;
    const buttonCorrectAnswer = (answer, index) => (
      <button
        type="button"
        data-testid="correct-answer"
        id="correct"
        key={ index }
        onClick={ this.answerSelected }
        className={ correct }
        disabled={ timer === 0 }
      >
        { answer }
      </button>);
    const buttonWrongAnswer = (answer, index) => (
      <button
        type="button"
        data-testid={ `wrong-answer-${index}` }
        id="wrong"
        key={ index }
        onClick={ this.answerSelected }
        className={ failed }
        disabled={ timer === 0 }
      >
        { answer }
      </button>
    );
    return (
      <div>
        <p>{ timer }</p>
        <h1 data-testid="question-category">{ question.category }</h1>
        <h2 data-testid="question-text">{ question.question }</h2>
        <div data-testid="answer-options">
          {
            sortedQuestions.map((answer, index) => (
              index === indexCorrectAnswer
                ? buttonCorrectAnswer(answer, index)
                : buttonWrongAnswer(answer, index)
            ))
          }
        </div>
        { answered
            && (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ (event) => {
                  nextQuestionOnClick();
                  this.shuffleAnswers(event);
                } }
              >
                Next
              </button>
            )}

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sumScoreDispatch: (aboutAnswer) => dispatch(sumScore(aboutAnswer)),
});

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  sumScoreDispatch: PropTypes.func.isRequired,
  nextQuestionOnClick: PropTypes.func.isRequired,
  isAnswered: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(Question);
