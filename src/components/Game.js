import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Question from './Question';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
    };
  }

  componentDidUpdate() {
    const { questions, history } = this.props;
    const zero = 0;
    console.log('did update', questions);
    if (questions.response_code !== zero) {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  render() {
    const { questions } = this.props;
    const { currentQuestion } = this.state;
    const zero = 0;
    console.log('questions', questions);
    return (
      <div className="App">
        <Header />
        {
          questions.length === 0 || questions.response_code !== zero
            ? <p>Carregando</p>
            : <Question question={ questions.results[currentQuestion] } />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Game);
