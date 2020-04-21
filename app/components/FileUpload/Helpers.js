export default function getDropzoneState(acceptedFiles, rejectedFiles, loading, message) {
  let currentState = 'default';

  if (isSuccess(message, acceptedFiles)) currentState = 'success';
  if (isError(message, rejectedFiles)) currentState = 'error';
  if (isLoading(loading, message)) currentState = 'loading';

  return currentState;
}

function isSuccess(message, acceptedFiles) {
  return acceptedFiles.length && message.isActive && message.type === 'success';
}

function isError(message, rejectedFiles) {
  return rejectedFiles.length || (message.isActive && message.type === 'error');
}

function isLoading(loading, message) {
  return loading && !message.isActive;
}