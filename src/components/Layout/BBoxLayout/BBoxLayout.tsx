import React from 'react';
import { Grid } from '@material-ui/core';

export const BBoxLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Grid container justify="center">
    <Grid item xs={12} sm={12} md={8} lg={6}>
      {children}
    </Grid>
  </Grid>
);
