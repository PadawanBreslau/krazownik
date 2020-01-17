import React from 'react';
import { reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { redirect, prepareEndpoint, prepareSearchEndpoint } from 'helpers/Url';
import generateActions from 'redux/infiniteScroll/actions';
import withRedux from 'hoc/infiniteScrollHOC/ReduxConnect';
import isArray from 'lodash/isArray';

export const generateFormOptions = (hocOptions) => {
  const {
    storeName,
    formName,
    validator,
    rules,
    api,
    successCallbackActions,
    successRedirectUrl,
    customFormOptions,
    search,
    beforeSubmit,
  } = hocOptions;
  return {
    form: formName,
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions(storeName);
      const formattedPayload = payload.toJS();
      const successCallback = successCallbackActions || [];
      if (successRedirectUrl) {
        successCallback.push(redirect(successRedirectUrl));
      }

      if (beforeSubmit) {
        beforeSubmit.forEach((item) => {
          if (isArray(formattedPayload[item])) {
            formattedPayload[item] = formattedPayload[item]
              .map((element) => element.value)
              .join('; ');
          }
        });
      }

      Object.keys(api).forEach((method) => {
        let formattedEndpoint = prepareEndpoint(api[method], props);
        if (search) {
          formattedEndpoint = prepareSearchEndpoint(formattedEndpoint, payload.toJS());
        }
        dispatch(submitPageData(formattedEndpoint, method, formattedPayload, successCallback));
      });
    },
    validate: (values, props) => {
      if (validator) return validator(values, props, rules);
      return {};
    },
    ...customFormOptions,
  };
};

export default (hocOptions) => (PageComponent) => {
  @withRedux(hocOptions)
  class WriteHOC extends React.PureComponent {
    componentDidMount() {
      const { dispatch } = this.props;
      const { initialize } = hocOptions;
      if (initialize) {
        dispatch(this.props.initialize(initialize(this.props)));
      }
    }

    render() {
      const { data, handleSubmit } = this.props;
      return <PageComponent handleSubmit={handleSubmit} data={data} {...this.props} />;
    }
  }
  WriteHOC.propTypes = {
    handleSubmit: PropTypes.func,
    data: PropTypes.object,
    dispatch: PropTypes.func,
    initialize: PropTypes.func,
  };

  return reduxForm(generateFormOptions(hocOptions))(WriteHOC);
};
