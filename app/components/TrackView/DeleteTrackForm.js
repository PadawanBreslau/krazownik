import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './styles.scss';

export default class DeleteTrackForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.delete}>
        <form>
          <Button isChecked={true}>
            <button type="submit" className={styles.deleteButton} onClick={handleSubmit}>
              Usuń trasę
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

DeleteTrackForm.propTypes = {
  handleSubmit: PropTypes.func,
};
