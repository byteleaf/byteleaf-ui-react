import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BPaddedCenterGrid } from './BPaddedCenterGrid';

describe('BPaddedCenterGrid', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BPaddedCenterGrid>
        <button>test</button>
      </BPaddedCenterGrid>,
    );

    expect(container).toMatchSnapshot();
  });
});
