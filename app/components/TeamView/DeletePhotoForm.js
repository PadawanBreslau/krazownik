import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './styles.scss';

export default class DeletePhotoForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.delete}>
        <form>
          <Button isChecked={true}>
            <button type="submit" className={styles.deleteButton} onClick={handleSubmit}>
              Usuń zdjęcie
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

DeletePhotoForm.propTypes = {
  handleSubmit: PropTypes.func,
};