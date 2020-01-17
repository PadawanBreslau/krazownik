import React from 'react';
import { shallow } from 'enzyme';

import FormField from '../index';

describe('<FormField />', () => {
  it('It should render label when label text present', () => {
    const wrapper = shallow(<FormField label="City name" fieldName="city" />);
    expect(wrapper.find('label').length).toEqual(1);
  });
});
