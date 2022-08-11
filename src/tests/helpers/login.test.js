import React from 'react';
import { screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import { firstAPI } from './mockAPI';


describe('Testa a página Login', () => {
  const name = 'Name';
  const email = 'email@email.com';
  test('Se é possível fazer Login', () => {
    renderWithRouterAndRedux(<App />);

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(firstAPI),
    }));

    const buttonPlay = screen.getByRole('button', { name: /play/i });
    const inputName = screen.getByRole('textbox', { name: /nome:/i });
    const inputEmail = screen.getByRole('textbox', { name: /email:/i });

    userEvent.type(inputName, name);
    userEvent.type(inputEmail, email);
    userEvent.click(buttonPlay);
    expect(fetch).toBeCalled();
    console.log(screen.logTestingPlaygroundURL());
  })
});