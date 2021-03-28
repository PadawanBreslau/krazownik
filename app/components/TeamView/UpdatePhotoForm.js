import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './styles.scss';

export default class UpdatePhotoForm extends React.PureComponent {
  render() {
    const { accepted, handleSubmit } = this.props;

    console.log(accepted);
    const label = accepted ? 'Cofnij akceptację' : 'Zaakceptuj zdjęcie'

    return (
      <div className={styles.update}>
        <form>
          <Button isChecked={accepted}>
            <button type="submit" onClick={handleSubmit} className={styles.button}>
              {label}
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

UpdatePhotoForm.propTypes = {
  handleSubmit: PropTypes.func,
  accepted: PropTypes.bool,
};