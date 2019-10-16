import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BHeadline } from './BHeadline';

describe('BHeadline', () => {
  it('renders correctly', async () => {
    const { container } = render(<BHeadline>Headline</BHeadline>);

    expect(container).toMatchSnapshot();
  });
});
