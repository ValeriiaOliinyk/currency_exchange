import React from "react";
import Select from "react-select";
// Components
import { CurrencyRow } from "./CurrencyRow";
import { Title, Container } from "../styles/components";

const options = [
  { label: "Chocolate", value: "Chocolate" },
  { label: "Strawberry", value: "Strawberry" },
  { label: "Vanilla", value: "Vanilla" }
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    width: 400,
    height: 40,
    padding: 20
  }),

  control: () => ({
    width: 400,
    height: 40,
    paddingLeft: 20,
    fontSize: 18,
    backgroundColor: "gold"
  }),

  singleValue: (provided: any, state: any) => {
    return { ...provided };
  }
};

export const Convert = () => {
  return (
    <Container>
      <Title>Convert</Title>
      <CurrencyRow />
      <Select
        styles={customStyles}
        options={options}
        defaultValue={options[0]}
        isSearchable={false}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }}
      />
    </Container>
  );
};
