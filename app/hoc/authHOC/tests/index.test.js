import React from 'react';

import { mount } from 'enzyme';
import Providers from 'helpers/testing/providers';
import withAuthentication from '../index';

const Component = () => <div>test</div>;
function renderDecorated(params) {
  const DecoratedComponent = withAuthentication(params)(Component);
  return Providers(<DecoratedComponent />);
}
describe('withAuthentication', () => {
  it('should pass the user data as a prop', () => {
    const renderedComponent = mount(renderDecorated());
    expect(renderedComponent.find(Component).prop('user')).toBeDefined();
  });
});
