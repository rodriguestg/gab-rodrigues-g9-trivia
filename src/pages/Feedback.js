import React, { Component } from 'react';
import Header from '../components/Header';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="feedback-text">
          a
        </div>
      </div>
    );
  }
}
