import React from 'react';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';

import styles from './styles.scss';


@withAuthentication()
@withApiWrite({
  storeName: 'joinForm',
  formName: 'joinForm',
  api: {
    post: '/participations',
  },
  customFormOptions: {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    onSubmit: (payload, dispatch) => {
      const { submitPageData } = generateActions('joinForm');
      const { loadPageData } = generateActions('userPanel');


      const formattedEndpoint = prepareEndpoint('/participations', payload);
      const reloadCallback = loadPageData('/panel');

      const successCallbackActions = [
        reloadCallback,
        showUiSuccess('Zostałeś dodany do wydarzenia'),
      ];

      dispatch(submitPageData(formattedEndpoint, 'post', payload, successCallbackActions));
    },
  },
})
export default class JoinForm extends React.PureComponent {
  render(){
    const { handleSubmit } = this.props;

    return(
      <form>
        <button onClick={handleSubmit} className={styles.button}>Zapisz sie na najbliższego Krążownika</button>
      </form>
    );
  }
}


