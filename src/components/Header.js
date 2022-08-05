import React from 'react';
import { PropTypes } from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, email, placar } = this.props;
    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          alt="Gravatar"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name || ''}</p>
        <p data-testid="header-score">{placar || 0}</p>
      </header>);
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  placar: PropTypes.number.isRequired,
};

export default Header;
