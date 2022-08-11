import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';


describe('Testa a página Feedback', () => {
  const email = 'email@email.com';
  const name = 'email';
  test('o play again', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const inputName = screen.getByRole('textbox', { name: /nome:/i });
    const inputEmail = screen.getByRole('textbox', { name: /email:/i });
    const buttonPlay = screen.getByRole('button', { name: /play/i });

    userEvent.type(inputEmail, email);
    userEvent.type(inputName, name);
    userEvent.click(buttonPlay);
    history.push('/feedback');

    const buttonPlayAgain = screen.getByRole('button', { name: /play again/i });
    userEvent.click(buttonPlayAgain);
  })

  test('o ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const inputName = screen.getByRole('textbox', { name: /nome:/i })
    const inputEmail = screen.getByRole('textbox', { name: /email:/i });
    const buttonPlay = screen.getByRole('button', { name: /play/i });

    userEvent.type(inputEmail, email);
    userEvent.type(inputName, name);
    fireEvent.click(buttonPlay);
  })
})