import React from 'react';
import { BDropzone } from './BDropzone';

export default {
  title: 'FileUpload|BDropzone',
};

export const BDropzoneStory = () => (
  <BDropzone
    onChange={() => {}}
    dropzoneText="Drop JSON file here!"
    filesLimit={1}
    acceptedFiles={['application/json']}
    errorText={null}
    maxFileSize={1000}
  />
);

BDropzoneStory.story = {
  name: 'Default',
  parameters: {
    notes: 'A dropzone for adding files',
  },
};

export const BDropzoneMultipleStory = () => (
  <BDropzone
    onChange={() => {}}
    dropzoneText="Drop up to 10 JSON files here!"
    filesLimit={10}
    acceptedFiles={['application/json']}
    errorText={null}
    maxFileSize={1000}
  />
);

BDropzoneMultipleStory.story = {
  name: 'Multiple files',
  parameters: {
    notes: 'A dropzone for adding files',
  },
};

export const BDropzoneErrorStory = () => (
  <BDropzone
    onChange={() => {}}
    dropzoneText="Drop JSON file here!"
    filesLimit={1}
    acceptedFiles={['application/json']}
    errorText="Please select a valid file."
    maxFileSize={1000}
  />
);

BDropzoneErrorStory.story = {
  name: 'Error',
  parameters: {
    notes: 'A dropzone for adding files',
  },
};
