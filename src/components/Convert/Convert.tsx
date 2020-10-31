import React from "react";

// Components
import { CurrencyRow } from "../CurrencyRow/CurrencyRow";
import { Title, Container } from "../../styled";

export function Convert() {
  return (
    <Container>
      <Title>Convert</Title>
      <CurrencyRow />
    </Container>
  );
}
