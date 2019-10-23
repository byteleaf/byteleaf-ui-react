import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BPaddedPaper } from './BPaddedPaper';

describe('BPaddedPaper', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BPaddedPaper>
        <div>Layout</div>
      </BPaddedPaper>,
    );

    expect(container).toMatchSnapshot();
  });

  it('has a gray background', async () => {
    const { container } = render(
      <BPaddedPaper backgroundColor="#ddd">
        <div>Layout</div>
      </BPaddedPaper>,
    );

    expect(container).toMatchSnapshot();
  });
});
