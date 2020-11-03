import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";
import routes from "../../routes";

// Components
import {
  Header,
  Nav,
  NavigationList,
  NavigationItems,
  Logo,
  NavLinks,
} from "../../styled";
import theme from "../../styles/theme";

it("Navigation component renders correctly", () => {
  const tree = shallow(
    <Header>
      <BrowserRouter>
        <Nav>
          <Logo theme={theme} />
          <NavigationList theme={theme}>
            <NavigationItems>
              <NavLinks to={routes.home} theme={theme}>
                Home
              </NavLinks>
            </NavigationItems>
            <NavigationItems>
              <NavLinks to={routes.currency} theme={theme}>
                Convert
              </NavLinks>
            </NavigationItems>
          </NavigationList>
        </Nav>
      </BrowserRouter>
    </Header>
  );
  expect(tree).toMatchSnapshot();
});
