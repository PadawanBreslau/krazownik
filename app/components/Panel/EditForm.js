import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import FormField from 'components/FormField';
import CheckboxField from 'components/CheckboxField';
import Button from 'components/Button';
import validators from 'helpers/Validators';
import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info.svg';
import styles from './styles.scss';

@withAuthentication()
@withApiWrite({
  storeName: 'editForm',
  formName: 'editForm',
  customFormOptions: {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('editForm');
      const { loadPageData } = generateActions('userPanel');
      const formattedEndpoint = prepareEndpoint(`/users/${props.userId}`, payload);
      const reloadCallback = loadPageData('/panel');
      const successCallbackActions = [reloadCallback, showUiSuccess('Zmieniłeś swoje dane')];

      dispatch(submitPageData(formattedEndpoint, 'put', payload.toJS(), successCallbackActions));
    },
  },
})
class EditForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;
    const validateTerms = validators.requireWithMessage(
      'Proszę zapoznać się z polityką prywatności',
    );

    return (
      <form>
        <FormField type="text" fieldName="name" placeholder="Nazwa użytkownika" />
        <FormField type="text" fieldName="phoneNumber" placeholder="Numer telefonu" />
        <CheckboxField fieldName="sendMessages" className="form-field">
          Chcę dostawać informacje SMSem
          <span className={styles.label}>
            <Tooltip title="Organizacyjne informacje SMSowe" position="right" delay={250}>
              <InfoIcon />
            </Tooltip>
          </span>
        </CheckboxField>
        <CheckboxField fieldName="sendRiddles" className="form-field">
          Chcę dostawać zagadki SMSem
          <span className={styles.label}>
            <Tooltip title="Zagadki w trakcie trwania imprezy" position="right" delay={250}>
              <InfoIcon />
            </Tooltip>
          </span>
        </CheckboxField>
        <CheckboxField fieldName="teamReady" className="form-field">
          Chcę brać udział w drużynówce
          <span className={styles.label}>
            <Tooltip title="Czy rozpatrywać Cię przy rozdziale drużyn" position="right" delay={250}>
              <InfoIcon />
            </Tooltip>
          </span>
        </CheckboxField>
        <CheckboxField fieldName="privacyPolicyAccepted" validate={validateTerms}>
          Zapoznałem się z{' '}
          <Link to="/privacy" target="_blank">
            polityką prywatności
          </Link>
        </CheckboxField>
        <Button>
          <button type="submit" onClick={handleSubmit} className={styles.button}>
            Zmień dane
          </button>
        </Button>
      </form>
    );
  }
}

EditForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default connect((state) => ({
  initialValues: fromJS({
    name: state.toJS().userPanel.data?.attributes?.name,
    phoneNumber: state.toJS().userPanel.data?.attributes?.phoneNumber,
    sendMessages: state.toJS().userPanel.data?.attributes?.sendMessages,
    sendRiddles: state.toJS().userPanel.data?.attributes?.sendRiddles,
    teamReady: state.toJS().userPanel.data?.attributes?.teamReady,
    privacyPolicyAccepted: state.toJS().userPanel.data?.attributes?.privacyPolicyAccepted,
  }),
}))(EditForm);
