import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { Empty } from '../../../components';
import Theme from '../../../styles/theme';

it('renders with text', async () => {
  render(
    <ThemeProvider theme={Theme}>
      <Empty />
    </ThemeProvider>,
  );

  screen.debug();

  expect(screen.getByText('No favorite currencies')).toBeInTheDocument();
});
