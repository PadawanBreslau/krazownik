import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form/immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SelectField from '../index';

describe('<SelectField />', () => {
  it('Should call onFieldChange callback when value change', () => {
    const store = createStore(() => ({}));
    const WithForm = reduxForm({ form: 'testForm' })(SelectField);
    const onFieldChangeMock = jest.fn();
    const props = {
      onFieldChange: onFieldChangeMock,
      fieldName: 'test',
    };
    const wrapper = mount(
      <Provider store={store}>
        <WithForm {...props} />
      </Provider>,
    );

    wrapper.find('select').simulate('change');
    expect(onFieldChangeMock).toBeCalled();
    wrapper.unmount();
  });
});
