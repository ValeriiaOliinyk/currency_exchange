import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Container, Title } from "../../styled";

test("Container component works", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("Container component works with Title component inside", () => {
//   const container = renderer.create(<Container />).toJSON();
//   ReactDOM.render(<Title />, container);
//   ReactDOM.unmountComponentAtNode(container);
// });
