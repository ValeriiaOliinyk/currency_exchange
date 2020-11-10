import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderMain } from '../styles/components';

export const MainLoader = () => (
  <LoaderMain role="loader">
    <Loader type="Oval" color="#a6dbfb" height={80} width={80} />
  </LoaderMain>
);
