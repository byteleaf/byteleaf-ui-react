import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BBoxLayout } from './BBoxLayout';

describe('BBoxLayout', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BBoxLayout>
        <div>Layout</div>
      </BBoxLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
