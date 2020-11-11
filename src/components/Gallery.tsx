import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Image } from '../styles/components';

export const Gallery = () => (
  <Grid container spacing={2} justify="center">
    <Grid item>
      <Image src="./images/money-2696229_640.jpg" />
    </Grid>
    <Grid item>
      <Image src="./images/money-2696228_640.jpg" />
    </Grid>
    <Grid item>
      <Image src="./images/money-2696229_640.jpg" />
    </Grid>
    <Grid item>
      <Image src="./images/money-2696234_640.jpg" />
    </Grid>
    <Grid item>
      <Image src="./images/money-2724235_640.jpg" />
    </Grid>
    <Grid item>
      <Image src="./images/money-2724241_640.jpg" />
    </Grid>
  </Grid>
);
