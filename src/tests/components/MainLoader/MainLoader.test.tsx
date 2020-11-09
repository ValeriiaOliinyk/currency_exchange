import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";
import Loader from "react-loader-spinner";

import { LoaderMain } from "../../../styles/components";

it("MainLoader component works", () => {
  const tree = shallow(
    <LoaderMain>
      <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
    </LoaderMain>
  );
  expect(tree).toMatchSnapshot();
});
