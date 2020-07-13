import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import { withApiReadWrite } from 'hoc/apiHOC';
import styles from './styles.scss';

@withApiReadWrite({
  storeName: 'toggleChallenge',
  formName: 'toggleChallengeForm',
  api: {
    post: '/challenges/:challengeId/toggle',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('toggleChallenge');
      const { loadPageData } = generateActions('Challenges');
      const formattedPayload = payload.toJS();

      const formattedEndpoint = prepareEndpoint(`/challenges/${props.challengeId}/toggle`, props);
      const callback = [
        showUiSuccess(props.completed ? 'Wyzwanie odznaczone' : 'Wyzwanie zaznaczone'),
        loadPageData('/challenges'),
      ];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  },
})
export default class ToggleChallengeForm extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { completed, handleSubmit } = this.props;

    const label = completed ? 'Cofnij' : 'Ukończ';
    const style = completed ? styles.buttonBack : styles.button;
    return (
      <form>
        <button type="button" onClick={handleSubmit} className={style}>
          {label}
        </button>
      </form>
    );
  }
}

ToggleChallengeForm.propTypes = {
  handleSubmit: PropTypes.func,
  completed: PropTypes.bool,
};
