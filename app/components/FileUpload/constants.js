import React from 'react';
import DropIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./dropzone.svg';
import ErrorIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./error.svg';
import SuccessIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./success.svg';
import Loader from '-!babel-loader!svg-react-loader?name=ExitIcon!./loader.svg';
import styles from './Placeholder.scss';

export const DROPZONES_STATES = {
  default: {
    icon: <DropIcon />,
    heading: 'Drag & drop',
    helper: (
      <span>
        your files here, or
        <span className={styles.link}>browse</span>
      </span>
    ),
    info: (
      <span>
        {'Size limit: 10mb.'}
        <span className={styles.infoPrimary}>PDF</span> only*
      </span>
    ),
  },
  success: {
    icon: <SuccessIcon />,
    heading: 'Uploaded!',
    helper: 'File was succesfully uploaded!',
    info: 'Browse for other file instead',
  },
  error: {
    icon: <ErrorIcon />,
    heading: 'Something went wrong...',
    helper: 'You have tried to upload file type we do not support',
    info: 'Browse for a new file',
  },
  loading: {
    icon: <Loader />,
    heading: 'Uploading',
    helper: 'Please wait, your file is being uploaded.',
    info: '...',
  },
};