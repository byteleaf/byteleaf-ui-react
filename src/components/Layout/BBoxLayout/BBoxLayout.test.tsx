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

  it('renders correctly on small', async () => {
    const { container } = render(
      <BBoxLayout size="small">
        <div>Layout</div>
      </BBoxLayout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly on medium', async () => {
    const { container } = render(
      <BBoxLayout size="medium">
        <div>Layout</div>
      </BBoxLayout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly on large', async () => {
    const { container } = render(
      <BBoxLayout size="large">
        <div>Layout</div>
      </BBoxLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
