import React from 'react';

import { BFormSectionHeadline } from './BFormSectionHeadline';
import { GrayBackground } from '../../../../.storybook/decorators';

export default {
  title: 'Form|BFormSectionHeadline',
};

export const BFormSectionHeadlineStory = () => (
  <BFormSectionHeadline>
    This is a Headline with a small padding at the top (grey background for demonstration)
  </BFormSectionHeadline>
);

BFormSectionHeadlineStory.story = {
  name: 'Default',
  decorators: [GrayBackground],
  parameters: {
    notes: 'A Headline component, used as a section title in forms.',
  },
};
