import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Game extends React.Component {
  render() {
    // const { questions } = this.props;
    // const { category } = questions;
    return (
      <div className="App">
        <Header />
        <h1 data-testid="question-category">a</h1>
        <h2 data-testid="question-text">a</h2>
        <p>a</p>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
});

export default connect(mapStateToProps, null)(Game);
