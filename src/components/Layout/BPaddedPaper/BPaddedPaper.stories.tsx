import React from 'react';

import Typography from '@material-ui/core/Typography';
import { color } from '@storybook/addon-knobs';

import { BPaddedPaper } from './BPaddedPaper';

export default {
  title: 'Layout|BPaddedPaper',
};

export const BPaddedPaperStory = () => {
  const label = 'Background Color';
  const defaultValue = '#fff';
  const backgroundColor = color(label, defaultValue);

  return (
    <BPaddedPaper backgroundColor={backgroundColor}>
      <Typography>This is a Paper with a small padding and a gray background.</Typography>
    </BPaddedPaper>
  );
};

BPaddedPaperStory.story = {
  name: 'Default',
  parameters: {
    notes:
      "A Paper with a small padding on all sides, so that the content doesn't stick to the paper's border. Gray background",
  },
};
