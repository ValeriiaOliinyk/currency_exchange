/* eslint-disable jest/valid-describe */
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import {
  currencyResponse,
  rates,
  updatedData,
  rate,
} from '../../../helpers/fakeResponse';
import { CurrencyRow } from '../../../components';

import Theme from '../../../styles/theme';

const initialState = {
  currency: currencyResponse,
  rates,
  rate,
  updatedData,
};

it('Renders with option elements', async () => {
  let store: any = configureStore()(initialState);
  const { findAllByRole } = render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CurrencyRow />
      </ThemeProvider>
    </Provider>,
  );

  const options = await findAllByRole('option');
  expect(options).toHaveLength(66);
});

it('Renders select elements', async () => {
  let store: any = configureStore()(initialState);
  const { getByRole } = render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CurrencyRow />
      </ThemeProvider>
    </Provider>,
  );
});
