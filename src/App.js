import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Navigation, MainLoader } from "./components";

// Views
const Home = lazy(() =>
  import("./views/Home/Home" /* webpackChunkName: "home-page" */)
);
const Currency = lazy(() =>
  import("./views/Currency/Currency" /* webpackChunkName: "currency-page" */)
);

export default function App() {
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
}
