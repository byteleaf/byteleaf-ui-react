import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
