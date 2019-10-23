import React from 'react';

import { BHeadline } from './BHeadline';
import { GrayBackground } from '../../../../.storybook/decorators';

export default {
  title: 'Text|BHeadline',
};

export const BHeadlineStory = () => (
  <BHeadline>This is a Headline with a small padding at the bottom (grey background for demonstration)</BHeadline>
);

BHeadlineStory.story = {
  name: 'Default',
  decorators: [GrayBackground],
  parameters: {
    notes: 'A Headline component, for example used as a title on a Paper or Card.',
  },
};
