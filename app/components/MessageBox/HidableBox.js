import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { hideMsg } from 'redux/UI/actions';
import CloseIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/close-small.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class HidableBox extends React.Component {
  constructor(props) {
    super(props);
    this.closeMessage = this.closeMessage.bind(this);
  }

  state = {
    isVisible: false,
  };

  componentWillMount() {
    if (this.props.static) {
      this.setState({ isVisible: true });
      this.countdown = setTimeout(() => {
        this.setState({ isVisible: false });
      }, this.props.delay);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive === true) {
      this.setState({ isVisible: true });
      this.countdown = setTimeout(() => {
        this.setState({ isVisible: false });
        if (this.props.dispatch) this.props.dispatch(hideMsg());
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    if (this.countdown) clearTimeout(this.countdown);
  }

  closeMessage() {
    this.setState({ isVisible: false });
    this.props.dispatch(hideMsg());
  }

  render() {
    const { isVisible } = this.state;
    const { isFixed, isGlobal, children } = this.props;
    const wrapperClass = cx({
      hidableBox: true,
      active: isVisible,
      absolute: isFixed,
      global: isGlobal,
    });
    const contentClass = cx({
      hidableContent: true,
      hidableContentGlobal: isGlobal,
    });

    return (
      <div className={wrapperClass}>
        <div className={contentClass}>
          {isGlobal && (
            <button type="button" className={styles.close} onClick={this.closeMessage}>
              <CloseIcon />
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
}
HidableBox.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  isActive: PropTypes.bool,
  static: PropTypes.bool,
  isFixed: PropTypes.bool,
  isGlobal: PropTypes.bool,
  dispatch: PropTypes.func,
};
export default HidableBox;
