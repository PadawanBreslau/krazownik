import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { showModal, showConfirmation } from 'redux/UI/actions';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(event) {
    event.preventDefault();
    event.stopPropagation();

    const { component, label, className, ...rest } = this.props;
    if (component) {
      const Component = component;
      this.props.dispatch(showModal(<Component {...rest} />));
    } else {
      this.props.dispatch(showConfirmation({ ...rest }));
    }
  }

  render() {
    const { label, children, className, disabled } = this.props;

    return (
      <button
        disabled={disabled}
        onClick={this.openModal}
        type="button"
        className={`popup-btn ${className}`}
      >
        {label || children}
      </button>
    );
  }
}

ModalButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.func,
  className: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withCompose = compose(withConnect)(ModalButton);

export default withCompose;
