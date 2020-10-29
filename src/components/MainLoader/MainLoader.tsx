import React from "react";
import Loader from "react-loader-spinner";

import { LoaderMain } from "../../styled";

export const MainLoader = () => (
  <LoaderMain>
    <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
  </LoaderMain>
);
