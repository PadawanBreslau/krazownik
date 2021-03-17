import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { prepareEndpoint } from 'helpers/Url';
import { showUiSuccess } from 'redux/UI/actions';
import { withApiWrite } from 'hoc/apiHOC';
import Button from 'components/Button';

import styles from './styles.scss';

@withApiWrite({
  storeName: 'toggleBonusPoint',
  formName: 'toggleBonusPointForm',
  api: {
    post: '/bonus_points/:bonusPointId/toggle',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('toggleBonusPoint');
      const { loadPageData } = generateActions('BonusPoints');
      const formattedPayload = payload.toJS();

      const formattedEndpoint = prepareEndpoint(
        `/bonus_points/${props.bonusPointId}/toggle`,
        props,
      );
      const callback = [loadPageData('/bonus_points'), showUiSuccess(props.message)];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  },
})
export default class BonusPointCompletionForm extends React.PureComponent {
  render() {
    const { handleSubmit, isChecked, label } = this.props;

    return (
      <form>
        <Button small isChecked={isChecked}>
          <button type="submit" onClick={handleSubmit}>
            {label}
          </button>
        </Button>
      </form>
    );
  }
}

BonusPointCompletionForm.propTypes = {
  handleSubmit: PropTypes.func,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
};
