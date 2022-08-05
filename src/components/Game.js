import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  functionA = (questionA) => {
    const { index } = this.state;
    const randomNumber = Math.floor(Math.random() * 4);
    const arrayT = [...questionA[index].incorrect_answers];
    console.log(typeof arrayT);
    arrayT
      .splice(randomNumber, 0, questionA[index].correct_answer);
    /*     const  answerCorrect = question.correct_answer; */
    console.log(arrayT);
    return arrayT;
  }

  // function changePosition(arr, from, to) {
  //   arr.splice(to, 0, arr.splice(from, 1)[0]);
  //   return arr;
  // };
  // let arr = [1,2,4,5,6,7,8,9,10,3];
  // arr = changePosition(arr, 9, 3);
  // console.log(arr); // [1,2,3,4,5,6,7,8,9,10]

  render() {
    const { questions } = this.props;
    const { index } = this.state;
    // const { category } = questions;
    return (
      <div className="App">
        <Header />
        <div>
          {
            questions[index].map((question) => (
              <>
                <h1 data-testid="question-category">{ question.category }</h1>
                <h2 data-testid="question-text">{ question.question }</h2>
                {
                  this.functionA(question)
                  arrayT === questionA[index].correct_answer ?
                  <button
                    type="button"
                    data-testid="answer-options correct-answer"
                  >
                    a
                  </button>
                  :
                  <button
                    type="button"
                    data-testid={ `answer-options wrong-answer-${index}` }
                  >
                    a
                  </button>
                }
              </>
            ))
          }
          <p />
          <button type="button" onClick={ () => this.functionA(questions) }>Botão</button>
          <p>a</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Game);
