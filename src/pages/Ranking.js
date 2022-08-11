import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions';

class Ranking extends Component {
  reset = () => {
    const { history, logoutFunction } = this.props;
    logoutFunction();
    history.push('/');
  };

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);
    return (
      <div data-testid="ranking-title">
        {
          ranking.map((rank, index) => {
            return (
              <div key={ index }>
                <img
                  src={ `https://www.gravatar.com/avatar/${md5(rank.picture).toString()}` }
                  alt="Gravatar"
                  data-testid="header-profile-picture"
                />
                <p data-testid={ `player-name-${index}` }>{ rank.name }</p>
                <p data-testid={ `player-score-${index}` }>{ rank.score }</p>
              </div>
            );
          })
        }
        <Link to="/">
          <button
            onClick={ this.reset }
            data-testid="btn-go-home"
            type="button"
          >
            Login
          </button>
        </Link>
      </div>
    );
  }
}

Ranking.propTypes = {
  logoutFunction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoutFunction: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Ranking);
