import React from 'react';

// Components
import { CurrencyRow } from './CurrencyRow';
import { Title, Container } from '../styles/components';

export function Convert() {
  return (
    <Container>
      <Title>Convert</Title>
      <CurrencyRow />
    </Container>
  );
}
