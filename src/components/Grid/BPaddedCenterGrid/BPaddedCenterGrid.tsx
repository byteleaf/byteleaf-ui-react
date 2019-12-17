import { Grid, styled, Theme } from '@material-ui/core';

export const BPaddedCenterGrid = styled(Grid)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(2),
  textAlign: 'center',
}));
