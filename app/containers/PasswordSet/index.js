import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { withApiWrite } from 'hoc/apiHOC';
import withLayout from 'hoc/layoutHOC';
import { setToStorage, setHeadersFromQuery } from 'helpers/Headers';

import PasswordSetForm from 'components/PasswordSetForm';
@withLayout({ type: 'simplified' })
@withApiWrite({
  storeName: 'password',
  formName: 'passwordForm',
  api: {
    post: '/auth/password',
  },
})
export class PasswordSet extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    setHeadersFromQuery(this.props.location.search);
  }

  componentDidUpdate() {
    if (this.props.data.meta.message === 'Password updated.') {
      setToStorage('name', this.props.data.meta.name);
      this.props.dispatch(push('/'));
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return <PasswordSetForm {...this.props} handleSubmit={handleSubmit} />;
  }
}

PasswordSet.propTypes = {
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(PasswordSet);
