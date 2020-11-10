import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import {
  currencyResponse,
  rates,
  updatedData,
  rate,
} from '../../../helpers/fakeResponse';
import { CurrencyList } from '../../../components';

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
        <CurrencyList />
      </ThemeProvider>
    </Provider>,
  );

  const options = await findAllByRole('list');
  expect(options).toHaveLength(2);
});
