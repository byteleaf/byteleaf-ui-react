import React from 'react';
import { Button } from '@material-ui/core';

import { BCenterGrid } from './BCenterGrid';

export default {
  title: 'Grid|BCenterGrid',
};

export const BCenterGridStory = () => (
  <BCenterGrid>
    <Button>Submit</Button>
  </BCenterGrid>
);

BCenterGridStory.story = {
  name: 'Default',
  parameters: {
    notes: 'A centered grid item',
  },
};
