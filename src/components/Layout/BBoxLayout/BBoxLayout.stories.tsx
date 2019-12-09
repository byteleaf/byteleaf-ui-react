import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BBoxLayout } from './BBoxLayout';

export default {
  title: 'Layout|BBoxLayout',
};

export const BBoxLayoutStorySmall = () => (
  <BBoxLayout size="small">
    <div style={{ backgroundColor: '#ddd', padding: '8px' }}>
      <Typography>This div is in a boxed layout.</Typography>
    </div>
  </BBoxLayout>
);

export const BBoxLayoutStoryMedium = () => (
  <BBoxLayout size="medium">
    <div style={{ backgroundColor: '#ddd', padding: '8px' }}>
      <Typography>This div is in a boxed layout.</Typography>
    </div>
  </BBoxLayout>
);

export const BBoxLayoutStoryLarge = () => (
  <BBoxLayout size="large">
    <div style={{ backgroundColor: '#ddd', padding: '8px' }}>
      <Typography>This div is in a boxed layout.</Typography>
    </div>
  </BBoxLayout>
);

BBoxLayoutStorySmall.story = {
  name: 'small',
  parameters: {
    notes: 'Small boxed layout. Will use half of the screen on large displays.',
  },
};

BBoxLayoutStoryMedium.story = {
  name: 'medium',
  parameters: {
    notes: 'Medium boxed layout. Will use half of the screen on large displays.',
  },
};

BBoxLayoutStoryLarge.story = {
  name: 'large',
  parameters: {
    notes: 'Large boxed layout. Will use half of the screen on large displays.',
  },
};
