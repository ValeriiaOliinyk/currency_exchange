import React from "react";

import routes from "../routes";

// Components
import {
  Header,
  Nav,
  NavigationList,
  NavigationItems,
  Logo,
  NavLinks,
} from "../styles/components";

export function Navigation() {
  return (
    <Header>
      <Nav>
        <Logo />
        <NavigationList>
          <NavigationItems>
            <NavLinks to={routes.home}>Home</NavLinks>
          </NavigationItems>
          <NavigationItems>
            <NavLinks to={routes.currency}>Convert</NavLinks>
          </NavigationItems>
        </NavigationList>
      </Nav>
    </Header>
  );
}
