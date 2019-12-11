import React from 'react';
import { Button } from '@material-ui/core';

import { BPaddedCenterGrid } from './BPaddedCenterGrid';

export default {
  title: 'Grid|BPaddedCenterGrid',
};

export const BPaddedCenterGridStory = () => (
  <BPaddedCenterGrid>
    <Button>Submit</Button>
  </BPaddedCenterGrid>
);

BPaddedCenterGridStory.story = {
  name: 'default',
  parameters: {
    notes: 'A padded centered grid item',
  },
};
