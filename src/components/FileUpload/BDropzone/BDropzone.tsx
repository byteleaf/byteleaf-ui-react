import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { FormHelperText } from '@material-ui/core';
import './style.scss';

interface DropzoneProps {
  onChange: (files: File[]) => void;
  dropzoneText: string;
  filesLimit: number;
  acceptedFiles: string[];
  errorText: string | null;
  maxFileSize: number;
}

export const BDropzone = ({
  onChange,
  dropzoneText,
  filesLimit,
  acceptedFiles,
  errorText,
  maxFileSize,
}: DropzoneProps) => {
  return (
    <div className={`${errorText ? 'dropzone-error' : ''}`}>
      <DropzoneArea
        useChipsForPreview
        dropzoneClass="byteleaf-dropzone"
        dropzoneParagraphClass="byteleaf-dropzone-paragraph"
        acceptedFiles={acceptedFiles}
        dropzoneText={dropzoneText}
        filesLimit={filesLimit}
        maxFileSize={maxFileSize}
        onChange={onChange}
      />

      {errorText ? <FormHelperText>{errorText}</FormHelperText> : null}
    </div>
  );
};
