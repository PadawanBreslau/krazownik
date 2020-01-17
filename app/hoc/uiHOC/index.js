import React from 'react';
import makeSelectUi from 'redux/UI/selectors';
import uiReducer from 'redux/UI/reducer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

export default function withUi() {
  return (PageComponent) => {
    class UiHOC extends React.PureComponent {
      render() {
        return <PageComponent {...this.props} />;
      }
    }
    UiHOC.propTypes = {};
    const mapStateToProps = createStructuredSelector({
      ui: makeSelectUi(),
    });
    const withConnect = connect(
      mapStateToProps,
      null,
    );
    const withUIReducer = injectReducer({ key: 'ui', reducer: uiReducer });
    const ComposedUiHOC = compose(
      withUIReducer,
      withConnect,
    )(UiHOC);

    return ComposedUiHOC;
  };
}
