import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { logout } from '../redux/actions';

class Feedback extends Component {
  feedbackMessage = () => {
    const messages = ['Could be better...', 'Well Done!'];
    const { assertions } = this.props;
    const numberAssertions = 3;
    if (assertions < numberAssertions) return messages[0];
    return messages[1];
  }

  reset = () => {
    const { history, logoutFunction } = this.props;
    logoutFunction();
    history.push('/');
  };

  render() {
    const { placar, assertions } = this.props;
    return (
      <div>
        <Header />
        <div data-testid="feedback-text">
          <p>{ this.feedbackMessage() }</p>
          <p data-testid="feedback-total-score">{placar}</p>
          <p data-testid="feedback-total-question">{assertions}</p>
          <button
            data-testid="btn-play-again"
            type="button"
            onClick={ this.reset }
          >
            Play Again
          </button>
          <Link to="/ranking" data-testid="btn-ranking">Ranking</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  placar: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  logoutFunction: () => dispatch(logout()),
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  placar: PropTypes.number.isRequired,
  logoutFunction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
