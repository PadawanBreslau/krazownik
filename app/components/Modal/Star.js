import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { showModal } from 'redux/UI/actions';
import StarButtonWrapper from 'components/StarButton';
import StarIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/star.svg';
import styles from './styles.scss';

class StarButton extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(event) {
    event.stopPropagation();

    const { component, className, ...rest } = this.props;
    const Component = component;

    this.props.dispatch(showModal(<Component {...rest} />));
  }

  render() {
    const { starred, label, simpleView, btnClass } = this.props;

    if (simpleView) {
      return (
        <button type="button" onClick={this.openModal} className={styles.starButton} tabIndex={0}>
          <StarIcon className={styles.star} />
        </button>
      );
    }

    return (
      <StarButtonWrapper
        handleClick={this.openModal}
        label={label}
        starred={starred}
        btnClass={btnClass}
      />
    );
  }
}

StarButton.propTypes = {
  label: PropTypes.string,
  simpleView: PropTypes.string,
  starred: PropTypes.bool,
  candidateId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.func,
  className: PropTypes.string,
  btnClass: PropTypes.string,
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
const withCompose = compose(withConnect)(StarButton);

export default withCompose;
