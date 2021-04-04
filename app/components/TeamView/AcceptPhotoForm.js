import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './styles.scss';

export default class AcceptPhotoForm extends React.PureComponent {
  render() {
    const { accepted, handleSubmit } = this.props;
    const label = accepted ? 'Cofnij akceptację' : 'Zaakceptuj zdjęcie'

    return (
      <div className={styles.delete}>
        <form>
          <Button isChecked={false}>
            <button type="submit" className={styles.deleteButton} onClick={handleSubmit}>
              {label}
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

AcceptPhotoForm.propTypes = {
  accepted: PropTypes.bool,
  handleSubmit: PropTypes.func,
};