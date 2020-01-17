import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';

import generateSelectApi from 'redux/api/selectors';
import generateReducer from 'redux/api/reducer';
import generateSaga from 'redux/api/saga';

export default (hocOptions) => (PageComponent) => {
  class ReduxHOC extends React.PureComponent {
    render() {
      return <PageComponent {...this.props} />;
    }
  }
  const mapDispatchToProps = hocOptions.mapDispatchToProps
    ? hocOptions.mapDispatchToProps
    : (dispatch) => ({ dispatch });
  const reducer = generateReducer(hocOptions.storeName);
  const selectorObject = { data: generateSelectApi(hocOptions.storeName) };
  const mapStateToProps = createStructuredSelector(selectorObject);
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  const withReducer = injectReducer({ key: hocOptions.storeName, reducer });
  const saga = generateSaga(hocOptions.storeName, hocOptions.local);
  const withSaga = injectSaga({ key: hocOptions.storeName, saga, mode: DAEMON });

  const ConnectedReduxHOC = compose(
    withReducer,
    withSaga,
    withConnect,
  )(ReduxHOC);

  return ConnectedReduxHOC;
};
