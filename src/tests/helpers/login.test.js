import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';

const firstAPI = {
  response_code:0,
  response_message:"Token Generated Successfully!",
  token:"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
};

describe('Testa a página Login', () => {
  const name = 'Name';
  const email = 'email@email.com';
  test('Se é possível fazer Login', () => {
    renderWithRouterAndRedux(<App />);
    console.log(screen.logTestingPlaygroundURL());

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
  })
});