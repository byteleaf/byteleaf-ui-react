import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { FormHelperText, makeStyles } from '@material-ui/core';

interface DropzoneProps {
  onChange: (files: File[]) => void;
  dropzoneText: string;
  filesLimit: number;
  acceptedFiles: string[];
  errorText: string | null;
  maxFileSize: number;
}

const useStyles = makeStyles({
  root: {
    '&.dropzone-error': {
      '& p': {
        color: '#f44336 !important',
      },
    },
    '& .byteleaf-dropzone': {
      '& .byteleaf-dropzone-paragraph': {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: '0em',
      },
      '& .MuiChip-root': {
        marginBottom: '8px',
      },
    },
  },
});

export const BDropzone = ({
  onChange,
  dropzoneText,
  filesLimit,
  acceptedFiles,
  errorText,
  maxFileSize,
}: DropzoneProps) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${errorText ? 'dropzone-error' : ''}`}>
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
