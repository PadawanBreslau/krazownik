import React from 'react';
import { Field } from 'redux-form/immutable';
import Select from 'components/Form/Select';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class DrawNewChallengeForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={styles.drawing}>
        <div className={styles.info}>Losowanie prywatnych wyzwań</div>
        <form>
          <span className={styles.label}> </span>
          <Field
            component={Select}
            name="maxPoints"
            className={styles.select}
            label="Wybierz liczbę punktów"
          >
            <option value="3">3 ptk</option>
            <option value="5">5 pkt</option>
            <option value="8">8 pkt</option>
            <option value="12">12 pkt</option>
          </Field>
          <button type="submit" onClick={handleSubmit} className={styles.button}>
            Wylosuj nowe wyzwanie
          </button>
        </form>
      </div>
    );
  }
}

DrawNewChallengeForm.propTypes = {
  handleSubmit: PropTypes.func,
};
