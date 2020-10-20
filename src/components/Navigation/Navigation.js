import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className="Navigation__list">
          <li>
            <NavLink
              className="Navigation__link"
              activeClassName="Navigation__active"
              to={routes.home}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navigation__link"
              activeClassName="Navigation__active"
              to={routes.currency}
            >
              Convert
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
