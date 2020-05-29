import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

class Message extends React.Component {
  parseError(err) {
    try {
      if (!err.body.errors) {
        return {
          title: err.type,
          text: err.body.error,
        };
      }

      if (Object.prototype.toString.call(err.body.errors[0]) !== '[object String]') {
        return {
          title: err.body.errors[0].title,
          text: err.body.errors[0].detail,
        };
      }

      return {
        text: err.body.errors[0],
      };
    } catch (e) {
      return {
        title: 'Application Error',
      };
    }
  }

  render() {
    const { type, title, text } = this.props.message;
    let msg;

    console.log('TITLE', title)
    if (type === 'error' || (title && title.status === 422)) {
      msg = this.parseError(title);
    } else {
      const titleMsg = typeof title === 'object' ? '' : title;
      msg = {
        titleMsg,
        text,
      };
    }
    return (
      <div className={classNames(styles['message-box'], styles[`message-box--${type}`])}>
        <strong className={classNames('message-box-title', styles.title)}>{msg.title}</strong>
        <span className={classNames('message-box-text', styles.text)}>{msg.text}</span>
      </div>
    );
  }
}
Message.propTypes = {
  message: PropTypes.object.isRequired,
};
export default Message;
