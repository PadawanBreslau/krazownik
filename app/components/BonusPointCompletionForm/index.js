import React from 'react';
import PropTypes from 'prop-types'
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint, redirect } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';

import styles from './styles.scss'

@withApiWrite({
  storeName: 'toggleBonusPoint',
  formName: 'toggleBonusPointForm',
  api: {
    post: '/bonus_points/:bonusPointId/toggle',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('toggleBonusPoint');
      const { loadPageData } = generateActions('BonusPoints')
      const formattedPayload = payload.toJS();

      const formattedEndpoint = prepareEndpoint(`/bonus_points/${props.bonusPointId}/toggle`, props);
      const callback = [
        loadPageData('/bonus_points'),
        showUiSuccess(props.message)
      ];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  }
})
export default class BonusPointCompletionForm extends React.PureComponent{
  render(){
    const { handleSubmit,buttonStyle, label } = this.props;

    return(
      <form>
        <button onClick={handleSubmit} className={styles.button}>{label}</button>
      </form>
    
    );
  }
}

BonusPointCompletionForm.propTypes = {
  bonusPoint: PropTypes.object,
}