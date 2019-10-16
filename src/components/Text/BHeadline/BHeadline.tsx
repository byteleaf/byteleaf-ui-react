import React from 'react';
import { styled, Typography } from '@material-ui/core';

const HeadlineWrapper = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

export const BHeadline = ({ children }: { children: string }) => (
  <HeadlineWrapper>
    <Typography variant="h5" component="h3">
      {children}
    </Typography>
  </HeadlineWrapper>
);
