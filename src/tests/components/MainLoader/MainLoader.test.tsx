import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MainLoader } from '../../../components';

import Theme from '../../../styles/theme';

it('Renders with option elements', async () => {
  const { findAllByRole } = render(
    <ThemeProvider theme={Theme}>
      <MainLoader />
    </ThemeProvider>,
  );

  const loader = await findAllByRole('loader');
  expect(loader).toHaveLength(1);
});
