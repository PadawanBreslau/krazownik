import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';

import FileIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/file.svg';
import styles from './styles.scss';

const adaptFileEventToValue = (onChange, onFileUpload) => (event) =>
  onFileUpload(event.target.files[0], (result) => {
    onChange(result.data.attributes.cv);
  });

const FileUploadField = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  onFileUpload,
  meta: omitMeta,
  tooltipText,
  showIcon,
  showFileName,
  ...props
}) => (
  <div className={styles.wrapper}>
    {showIcon && <FileIcon className="icon" />}
    {omitValue &&
      showFileName && (
        <span className={styles.value}>{omitValue.substring(omitValue.lastIndexOf('/') + 1)}</span>
      )}
    <input
      onChange={adaptFileEventToValue(onChange, onFileUpload)}
      type="file"
      accept="application/pdf, application/msword"
      id={`file-${inputProps.name}`}
      className={styles.input}
      {...inputProps}
      {...props}
    />
    <label htmlFor={`file-${inputProps.name}`}>
      <Tooltip
        title="Accepted file formats: Adobe PDF (.pdf),  Microsoft Word (.doc, .docx)"
        position="right-start"
        arrow="true"
        theme="light"
        className={styles.tooltip}
        html={tooltipText}
      >
        <div className={styles.button}>Upload file</div>
      </Tooltip>
    </label>
  </div>
);

FileUploadField.propTypes = {
  candidateId: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  onFileUpload: PropTypes.func,
  tooltipText: PropTypes.node,
  showIcon: PropTypes.bool,
  showFileName: PropTypes.bool,
};

FileUploadField.defaultProps = {
  showIcon: true,
  showFileName: true,
};

export default FileUploadField;
