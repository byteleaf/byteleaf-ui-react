import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BFormSectionHeadline } from './BFormSectionHeadline';

describe('BFormSectionHeadline', () => {
  it('renders correctly', async () => {
    const { container } = render(<BFormSectionHeadline>Headline</BFormSectionHeadline>);

    expect(container).toMatchSnapshot();
  });
});
