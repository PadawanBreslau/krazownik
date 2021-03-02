import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { prepareEndpoint } from 'helpers/Url';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { withApiWrite } from 'hoc/apiHOC';
import CryptoPanel from 'components/CryptoPanel';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiWrite({
  storeName: 'CryptoResultsForm',
  formName: 'CryptoResultsForm',
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {                                      
      const { submitPageData } = generateActions('CryptoResultsForm');                         
        
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint('/crypto/riddle_solutions', props);
          
      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload));        
    },  
  },
})
export default class Crypto extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data, handleSubmit } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return <CryptoPanel data={data?.payload} handleSubmit={handleSubmit} />;
  }
}

Crypto.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};
