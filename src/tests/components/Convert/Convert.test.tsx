import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import store from '../../../redux/store';

import { Convert } from '../../../components';
import Theme from '../../../styles/theme';

it('renders with text', () => {
  render(
    <ThemeProvider theme={Theme}>
      <Provider store={store.store}>
        <Convert />
      </Provider>
    </ThemeProvider>,
  );
  screen.debug();
  expect(screen.getByText('Convert')).toBeInTheDocument();
});
