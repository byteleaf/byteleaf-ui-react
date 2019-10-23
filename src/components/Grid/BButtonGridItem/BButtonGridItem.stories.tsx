import React from 'react';
import { Button } from '@material-ui/core';

import { BButtonGridItem } from './BButtonGridItem';

export default {
  title: 'Grid|BButtonGridItem',
};

export const BButtonGridItemStory = () => (
  <BButtonGridItem>
    <Button>Submit</Button>
  </BButtonGridItem>
);

BButtonGridItemStory.story = {
  name: 'default',
  parameters: {
    notes: 'A grid item for wrapping e.g. a submit button. Centers the button and adds a small margin to the top.',
  },
};
