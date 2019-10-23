import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BBoxLayout } from './BBoxLayout';

export default {
  title: 'Layout|BBoxLayout',
};

export const BBoxLayoutStory = () => (
  <BBoxLayout>
    <div style={{ backgroundColor: '#ddd', padding: '8px' }}>
      <Typography>This div is in a boxed layout.</Typography>
    </div>
  </BBoxLayout>
);

BBoxLayoutStory.story = {
  name: 'Default',
  parameters: {
    notes: 'Standard boxed layout. Will use half of the screen on large displays.',
  },
};
