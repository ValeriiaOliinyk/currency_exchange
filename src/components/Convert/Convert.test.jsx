import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
// import { Provider } from "react-redux";
// import store from "../../redux/store";

// import { CurrencyRow } from "../CurrencyRow/CurrencyRow";
import { Container, Title } from "../../styled";

import theme from "../../styles/theme";

// it("CurrencyRow component works", () => {
//   const tree = renderer
//     .create(
//       <Provider store={store.store}>
//         <CurrencyRow theme={theme} />
//       </Provider>
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe("Convert component renders correctly", () => {
  it("Container component works", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Title theme={theme}>Convert</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
