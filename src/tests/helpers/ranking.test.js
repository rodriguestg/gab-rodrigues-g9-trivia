import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import { initialStateMock, initialStateTokenMock } from './mockState';
import * as actions from '../../redux/actions';

describe('Testa as página Ranking', () => {
  jest.useFakeTimers();
  test('se o jogo está funcionando', () => {
    renderWithRouterAndRedux(<App />, initialStateMock, '/game');

    localStorage.setItem('ranking', JSON.stringify([{name:"Outra pessoa",score:0,picture:"email.com"},{name:"Lana",score:40,picture:"danubio.rafaeel@gmail.com"}]))

    const correctAnswer = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer);
    const buttonNext = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext);

    const correctAnswer1 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer1);
    const buttonNext1 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext1);

    const correctAnswer2 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer2);
    const buttonNext2 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext2);

    const correctAnswer3 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer3);

    jest.advanceTimersByTime(5000) 

    const buttonNext3 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext3);

    const correctAnswer4 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer4);
    const buttonNext4 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext4);

    const buttonRanking = screen.getByRole('link', { name: /ranking/i });
    userEvent.click(buttonRanking);

    const buttonLogout = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogout);

})
  test('se o usuário é deslogado quando o token é invalido', async () => {
    renderWithRouterAndRedux(<App />,initialStateTokenMock , '/game');

    const question = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ response_code: 3, results: [] }),
    }));

    actions.quizApi = jest.fn(() => {
      question()
    })

    actions.quizApi();
    expect(question).toBeCalled();
  })
  test('a página settings', () => {
    renderWithRouterAndRedux(<App />);

    const buttonConfiguration = screen.getByRole('button', { name: /configurações/i });
    userEvent.click(buttonConfiguration);
  })

  test('se o botão das respostas desabilita após 30 segundos', () => {
    renderWithRouterAndRedux(<App />, initialStateMock, '/game');

    localStorage.setItem('ranking', JSON.stringify([{name:"Outra pessoa",score:0,picture:"email.com"},{name:"Lana",score:40,picture:"danubio.rafaeel@gmail.com"}]))
    jest.advanceTimersByTime(30000) 
  })

  test('se o usuário é deslogado quando o token é inválido', async () => {
    renderWithRouterAndRedux(<App />, initialStateTokenMock, '/game');

    jest.advanceTimersByTime(3000);
  })

  test('se o usuário é adicionado ao Rank ao final do jogo', () => {
    renderWithRouterAndRedux(<App />, initialStateMock, '/game');

    localStorage.clear();

    const correctAnswer = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer);
    const buttonNext = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext);

    const correctAnswer1 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer1);
    const buttonNext1 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext1);

    const correctAnswer2 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer2);
    const buttonNext2 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext2);

    const correctAnswer3 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer3);

    const buttonNext3 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext3);

    const correctAnswer4 = screen.queryByTestId('correct-answer');
    userEvent.click(correctAnswer4);
    const buttonNext4 = screen.getByRole('button', { name: /next/i });
    userEvent.click(buttonNext4);

    const buttonRanking = screen.getByRole('link', { name: /ranking/i });
    userEvent.click(buttonRanking);

    const buttonLogout = screen.getByRole('button', { name: /login/i });
    console.log(screen.logTestingPlaygroundURL());
    userEvent.click(buttonLogout);

  })
})
