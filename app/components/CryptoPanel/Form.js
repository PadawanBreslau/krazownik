import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import styles from './styles.scss';

const Form = ({ handleSubmit }) => (
  <div className={styles.cryptoForm}>
    <h3> Wpisz swoją odpowiedź:</h3>
    <form>
      <FormField
        type="text"
        fieldName='answer'
      />
      <button type="submit" onClick={handleSubmit} className={styles.button}>
        Zatwierdź
      </button>
    </form>
  </div>
);

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
