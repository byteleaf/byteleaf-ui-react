/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Paper, styled, Theme } from '@material-ui/core';

interface PaddedPaperStyleProps {
  backgroundColor?: string;
}

interface PaddedPaperProps {
  backgroundColor?: string;
  children: JSX.Element | JSX.Element[];
}

export const BPaddedPaper = styled(
  ({
    backgroundColor = '#ffffff',
    ...other
  }: PaddedPaperStyleProps & Omit<PaddedPaperProps, keyof PaddedPaperStyleProps>) => <Paper {...other} />,
)(({ theme, backgroundColor }: { theme: Theme } & PaddedPaperStyleProps) => ({
  backgroundColor,
  padding: theme.spacing(4, 4),
}));
