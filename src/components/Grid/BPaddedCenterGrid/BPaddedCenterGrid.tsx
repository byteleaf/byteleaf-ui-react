import { Grid, styled, Theme } from '@material-ui/core';
import React from 'react';

export const BPaddedCenterGrid = styled(Grid)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(2),
  textAlign: 'center',
}));
