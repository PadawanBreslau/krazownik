import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isNil } from 'lodash';
import { hideModal } from 'redux/UI/actions';
import CloseIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/close.svg';
import styles from './styles.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        this.closeModal();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        this.closeModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  closeModal() {
    this.props.dispatch(hideModal());
  }

  render() {
    const { visible, content } = this.props;
    if (!visible) return null;
    return (
      <div className="popup-container">
        <div
          className={classNames(styles.overlay, visible ? styles.visible : styles.hidden)}
          onClick={this.closeModal}
          role="presentation"
        />
        <div className="popup-wrapper">
          <button type="button" className="popup-close-btn" onClick={this.closeModal}>
            <CloseIcon />
          </button>
          <div>{visible && content}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  content: PropTypes.node,
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
const withCompose = compose(withConnect)(Modal);

export default withCompose;
