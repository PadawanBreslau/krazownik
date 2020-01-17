import React from 'react';
import PropTypes from 'prop-types';
import withUi from 'hoc/uiHOC';
import HidableBox from './HidableBox';
import Message from './Message';

export const MessageBox = (props) => {
  const { delay, ui, fixed, global, dispatch } = props;

  if (!ui.message) return null;
  return (
    <HidableBox
      delay={delay}
      isActive={ui.message.isActive}
      isFixed={fixed}
      isGlobal={global}
      dispatch={dispatch}
    >
      <Message message={ui.message} />
    </HidableBox>
  );
};

MessageBox.propTypes = {
  ui: PropTypes.object.isRequired,
  delay: PropTypes.number,
  fixed: PropTypes.bool,
  global: PropTypes.bool,
  dispatch: PropTypes.func,
};
MessageBox.defaultProps = {
  delay: 6000,
};

export default withUi()(MessageBox);
