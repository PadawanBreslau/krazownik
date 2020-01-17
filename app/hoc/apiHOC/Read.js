import React from 'react';
import PropTypes from 'prop-types';
import { prepareEndpoint } from 'utils/Url';

import generateActions from 'redux/api/actions';
import withRedux from 'hoc/apiHOC/ReduxConnect';

export default (hocOptions) => (PageComponent) => {
  @withRedux({
    ...hocOptions,
    mapDispatchToProps: (dispatch) => ({
      dispatch,
      onComponentMounted: (endpoint, props) => {
        const actions = generateActions(hocOptions.storeName);
        const formattedEndpoint = prepareEndpoint(endpoint, props);
        dispatch(actions.loadPageData(formattedEndpoint));
      },
      generateReloadCallback: (props) => {
        const actions = generateActions(hocOptions.storeName);
        const formattedEndpoint = prepareEndpoint(hocOptions.api.get, props);
        return [actions.loadPageData(formattedEndpoint)];
      },
    }),
  })
  class ReadHOC extends React.PureComponent {
    componentDidMount() {
      const { api } = hocOptions;
      if (api.get) {
        this.props.onComponentMounted(api.get, this.props);
      }
    }

    render() {
      const { data } = this.props;
      return <PageComponent {...this.props} data={data} />;
    }
  }
  ReadHOC.propTypes = {
    data: PropTypes.object,
    onComponentMounted: PropTypes.func,
  };
  return ReadHOC;
};
