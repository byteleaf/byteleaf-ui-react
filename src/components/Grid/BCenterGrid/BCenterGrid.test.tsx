import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BCenterGrid } from './BCenterGrid';

describe('BCenterGrid', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BCenterGrid>
        <button>test</button>
      </BCenterGrid>,
    );

    expect(container).toMatchSnapshot();
  });
});
