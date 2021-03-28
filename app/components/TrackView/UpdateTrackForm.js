import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import { Field } from 'redux-form/immutable';
import Select from 'components/Form/Select';
import Button from 'components/Button';
import styles from './styles.scss';

export default class UpdateTrackForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.update}>
        <h2>Edytuj dane trasy</h2>
        <form>
          <FormField type="text" fieldName="customName" placeholder="Nazwa trasy" />
          <Field
            component={Select}
            name="multiplier"
            fieldName="multiplier"
            className={styles.select}
            label="Wybierz przelicznik punktów"
          >
            <option value="1">1.0</option>
            <option value="1.5">1.5 (z dzieckiem do 12 lat)</option>
            <option value="2">2.0 (z dzieckiem do 7 lat)</option>
          </Field>
          <Button>
            <button type="submit" onClick={handleSubmit} className={styles.button}>
              Zmień dane trasy
            </button>
          </Button>
        </form>
      </div>
    );
  }
}

UpdateTrackForm.propTypes = {
  handleSubmit: PropTypes.func,
};
