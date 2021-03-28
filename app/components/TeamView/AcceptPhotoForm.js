import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './styles.scss';

export default class AcceptPhotoForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.delete}>
        <form>
          <Button isChecked={false}>
            <button type="submit" className={styles.deleteButton} onClick={handleSubmit}>
              Zaakceptuj zdjęcie
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

AcceptPhotoForm.propTypes = {
  handleSubmit: PropTypes.func,
};