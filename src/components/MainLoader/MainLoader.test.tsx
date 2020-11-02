import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { LoaderMain } from "../../styled";
import Loader from "react-loader-spinner";

it("MainLoader component works", () => {
  const tree = renderer
    .create(
      <LoaderMain>
        <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
      </LoaderMain>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
