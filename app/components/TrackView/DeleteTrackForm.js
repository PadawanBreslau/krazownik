import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class DeleteTrackForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.delete}>
        <form>
          <button type="submit" className={styles.deleteButton} onClick={handleSubmit}>
            Usuń trasę
          </button>
        </form>
      </div>
    );
  }
}

DeleteTrackForm.propTypes = {
  handleSubmit: PropTypes.func,
};
