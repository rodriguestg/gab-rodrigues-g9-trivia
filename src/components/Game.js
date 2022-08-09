import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Question from './Question';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
      answered: false,
    };
  }

  componentDidUpdate() {
    const { questions, history } = this.props;
    const zero = 0;
    if (questions.response_code !== zero) {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  isAnswered = () => {
    this.setState({ answered: true });
  }

  saveRank = () => {
    const { player } = this.props;
    const ranking = localStorage.getItem('ranking');
    const personRank = {
      name: player.name, score: player.score, picture: player.gravatarEmail };
    if (ranking === null) {
      console.log('undefined');
      localStorage.setItem('ranking', JSON.stringify([personRank]));
    } else {
      const rankingParsed = JSON.parse(ranking);
      console.log(ranking);
      rankingParsed.push(personRank);
      localStorage.setItem('ranking', JSON.stringify(rankingParsed));
    }
  }

  nextQuestionOnClick = () => {
    const { history } = this.props;
    const { currentQuestion } = this.state;
    const lastIndexCurrentQuestion = 4;
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      answered: false,
    }));
    if (currentQuestion === lastIndexCurrentQuestion) {
      this.saveRank();
      history.push('/feedback');
    }
  }

  render() {
    const { questions } = this.props;
    const { currentQuestion, answered } = this.state;
    const zero = 0;
    return (
      <div className="App">
        <Header />
        {
          questions.length === 0 || questions.response_code !== zero
            ? <p>Carregando</p>
            : (
              <Question
                question={ questions.results[currentQuestion] }
                nextQuestionOnClick={ this.nextQuestionOnClick }
                isAnswered={ this.isAnswered }
                answered={ answered }
              />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  player: state.player,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Game);
