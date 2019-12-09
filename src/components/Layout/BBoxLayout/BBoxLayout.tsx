import React from 'react';
import { Grid } from '@material-ui/core';

interface Sizes {
  [size: string]: {
    [resolution: string]: 12 | 10 | 8 | 6 | 4 | 2 | 1 | 'auto';
  };
}

const sizes: Sizes = {
  small: {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4,
  },
  medium: {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
  },
  large: {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
  },
};

export const BBoxLayout = ({
  children,
  size = 'medium',
}: {
  children: JSX.Element | JSX.Element[];
  size?: 'small' | 'medium' | 'large';
}) => (
  <Grid container justify="center">
    <Grid item xs={sizes[size].xs} sm={sizes[size].sm} md={sizes[size].md} lg={sizes[size].lg}>
      {children}
    </Grid>
  </Grid>
);
