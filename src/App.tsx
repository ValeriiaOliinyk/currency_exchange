import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";

import Theme from "./styles/theme";

// Components
import { Navigation, MainLoader } from "./components";

// Views
const Home = lazy(
  () => import("./pages/Home" /* webpackChunkName: "home-page" */)
);
const Currency = lazy(
  () => import("./pages/Currency" /* webpackChunkName: "currency-page" */)
);
const ChartPage = lazy(
  () => import("./pages/ChartPage" /* webpackChunkName: "chart-page" */)
);

export const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Navigation />
          <Suspense fallback={<MainLoader />}>
            <Switch>
              <Route path={routes.home} exact component={Home} />
              <Route path={routes.currency} component={Currency} />
              <Route path={routes.chart} component={ChartPage} />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
