import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BHeadline } from './BHeadline';

test('loads and displays headline story', async () => {
  const { container } = render(<BHeadline>Headline</BHeadline>);

  expect(container).toMatchSnapshot();
});
