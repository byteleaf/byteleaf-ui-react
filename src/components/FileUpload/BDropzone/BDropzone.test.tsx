import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'react-app-polyfill/stable';
import { BDropzone } from './BDropzone';

describe('BDropZone', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <BDropzone
        onChange={() => {}}
        dropzoneText="Drop file here!"
        filesLimit={1}
        acceptedFiles={['application/json']}
        errorText={null}
        maxFileSize={1000}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders an error', async () => {
    const { container } = render(
      <BDropzone
        onChange={() => {}}
        dropzoneText="Drop file here!"
        filesLimit={1}
        acceptedFiles={['application/json']}
        errorText="Error!"
        maxFileSize={1000}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
