import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import { Navigation } from '../../../components';

import Theme from '../../../styles/theme';

it('Renders with text', () => {
  render(
    <Router>
      <ThemeProvider theme={Theme}>
        <Navigation />
      </ThemeProvider>
    </Router>,
  );
  screen.debug();
  expect(screen.getByText('Home')).toBeInTheDocument();
});
