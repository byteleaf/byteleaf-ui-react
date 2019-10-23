import React from 'react';
import { styled, Typography } from '@material-ui/core';

const HeadlineWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

export const BFormSectionHeadline = ({ children }: { children: string }) => (
  <HeadlineWrapper>
    <Typography variant="h6">{children}</Typography>
  </HeadlineWrapper>
);
