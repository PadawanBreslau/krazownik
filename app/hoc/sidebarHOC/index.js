import React from 'react';
import PropTypes from 'prop-types';

import { makeSelectSidebar } from 'redux/sidebar/selectors';
import sidebarReducer from 'redux/sidebar/reducer';
import sidebarSaga from 'redux/sidebar/saga';
import { loadSidebar, closeSidebar } from 'redux/sidebar/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

export default function withSidebar() {
  return (PageComponent) => {
    class SidebarHOC extends React.PureComponent {
      render() {
        const { sidebar } = this.props;
        return <PageComponent sidebarData={sidebar} {...this.props} />;
      }
    }
    SidebarHOC.propTypes = {
      sidebar: PropTypes.object,
    };
    const mapStateToProps = createStructuredSelector({
      sidebar: makeSelectSidebar(),
    });
    function mapDispatchToProps(dispatch) {
      return {
        showSidebar: (id) => {
          dispatch(loadSidebar(id));
        },
        hideSidebar: () => {
          dispatch(closeSidebar());
        },
      };
    }
    const withConnect = connect(
      mapStateToProps,
      mapDispatchToProps,
    );
    const withSidebarReducer = injectReducer({ key: 'sidebar', reducer: sidebarReducer });
    const withSidebarSaga = injectSaga({ key: 'sidebar', saga: sidebarSaga });
    const ComposedSidebarHOC = compose(
      withSidebarReducer,
      withSidebarSaga,
      withConnect,
    )(SidebarHOC);

    return ComposedSidebarHOC;
  };
}
