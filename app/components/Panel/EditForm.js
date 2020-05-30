import React from 'react';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';

import styles from './styles.scss';


@withAuthentication()
@withApiWrite({
  storeName: 'editForm',
  formName: 'editForm',
  api: {
    put: '/users',
  },
  customFormOptions: {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    onSubmit: (payload, id, dispatch) => {
      const { submitPageData } = generateActions('editForm');
      const { loadPageData } = generateActions('userPanel');

      const formattedEndpoint = prepareEndpoint(`/users/${id}`, payload);
      const reloadCallback = loadPageData('/panel');

      const successCallbackActions = [
        reloadCallback,
        showUiSuccess('Zmieniłeś swoje dane'),
      ];

      dispatch(submitPageData(formattedEndpoint, 'put', payload, successCallbackActions));
    },
  },
})
export default class EditForm extends React.PureComponent {
  render(){
    const { handleSubmit } = this.props;

    return(
      <form>
        <button onClick={handleSubmit} className={styles.button} disabled>Zmień dane</button>
      </form>
    );
  }
}


