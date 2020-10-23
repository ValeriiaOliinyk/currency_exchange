import React from "react";
import routes from "../../routes";

// Components
import Header from "../styled/Header";
import Nav from "../styled/Nav";
import NavigationList from "../styled/NavigationList";
import NavigationItems from "../styled/NavigationItems";
import Logo from "../styled/Logo";
import NavLink from "../styled/NavLink";

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <Logo></Logo>
        <NavigationList>
          <NavigationItems>
            <NavLink to={routes.home}>Home</NavLink>
          </NavigationItems>
          <NavigationItems>
            <NavLink to={routes.currency}>Convert</NavLink>
          </NavigationItems>
        </NavigationList>
      </Nav>
    </Header>
  );
};

export default Navigation;
