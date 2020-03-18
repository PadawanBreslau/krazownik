import React from 'react';

import PropTypes from 'prop-types';
import { withApiWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import styles from './styles.scss';


@withAuthentication()
@withApiWrite({
  storeName: 'toggleChallenge',
  formName: 'toggleChallengeForm',
  api: {
    post: '/challenges/:challengeId/toggle',
  },
})
export default class ToggleChallengeForm extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit } = this.props;
    return (
      <form>
        <button onClick={handleSubmit} className={styles.button}>Ukończ wyzwanie</button>
      </form>
    );
  }
}

ToggleChallengeForm.propTypes = {
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  dispatch: PropTypes.func,
  location: PropTypes.object,
};
