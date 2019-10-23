import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BButtonGridItem } from './BButtonGridItem';

describe('BButtonGridItem', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BButtonGridItem>
        <button>test</button>
      </BButtonGridItem>,
    );

    expect(container).toMatchSnapshot();
  });
});
