import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import Button from 'components/Button';
import styles from './styles.scss';

const Form = ({ handleSubmit }) => (
  <div className={styles.cryptoForm}>
    <form>
      <FormField
        type="text"
        fieldName='answer'
        placeholder="Twoja odpowiedź"
      />
      <Button>
        <button type="submit" onClick={handleSubmit}>
          Wyślij
        </button>
      </Button>
    </form>
  </div>
);

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
