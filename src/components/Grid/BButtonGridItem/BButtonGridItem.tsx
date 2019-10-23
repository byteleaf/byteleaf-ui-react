import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../../theme';

const useStyles = makeStyles({
  root: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
});

export const BButtonGridItem = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      {children}
    </Grid>
  );
};
