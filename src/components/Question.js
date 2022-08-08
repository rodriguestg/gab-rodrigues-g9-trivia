import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../question.css';

export default class Question extends Component {
  constructor() {
    super();

    this.state = {
      sortedQuestions: [],
      indexCorrectAnswer: 0,
      correct: 'vazio',
      failed: 'vazio',
    };
  }

  componentDidMount() {
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
  }

  answerSelected = () => {
    const { sortedQuestions, indexCorrectAnswer, correct, failed } = this.state;
    sortedQuestions.forEach((_answer, index) => (
      index === indexCorrectAnswer
        ? this.setState({
          correct: 'green',
        })
        : this.setState({
          failed: 'red',
        })
    ));
  }

  render() {
    const { question } = this.props;
    console.log(question);
    const { sortedQuestions, indexCorrectAnswer, correct, failed } = this.state;
    const buttonCorrectAnswer = (answer, index) => (
      <button
        type="button"
        data-testid="correct-answer"
        key={ index }
        onClick={ this.answerSelected }
        className={ correct }
      >
        { answer }
      </button>);
    const buttonWrongAnswer = (answer, index) => (
      <button
        type="button"
        data-testid={ `wrong-answer-${index}` }
        key={ index }
        onClick={ this.answerSelected }
        className={ failed }
      >
        { answer }
      </button>
    );
    return (
      <div>
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
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
};
