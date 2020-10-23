import React from "react";
import Loader from "react-loader-spinner";
import LoaderMain from "../styled/LoaderMain";

const MainLoader = () => (
  <LoaderMain>
    <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
  </LoaderMain>
);

export default MainLoader;
