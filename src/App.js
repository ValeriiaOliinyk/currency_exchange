import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "./routes";
import "./styles/base.scss";

// Components
import Navigation from "./components/Navigation/Navigation";
import MainLoader from "./components/MainLoader/MainLoader";

// Views
const Home = lazy(() =>
  import("./views/Home/Home" /* webpackChunkName: "home-page" */)
);
const Currency = lazy(() =>
  import("./views/Currency/Currency" /* webpackChunkName: "currency-page" */)
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<MainLoader />}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.currency} component={Currency} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
