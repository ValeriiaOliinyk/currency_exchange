import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import { LoaderMain } from "../../styled";
import Loader from "react-loader-spinner";

it("MainLoader component works", () => {
  const tree = shallow(
    <LoaderMain>
      <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
    </LoaderMain>
  );
  expect(tree).toMatchSnapshot();
});
