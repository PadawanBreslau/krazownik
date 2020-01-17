import React from 'react';

import { mount } from 'enzyme';
import Providers from 'helpers/testing/providers';
import withUi from '../index';

const Component = () => <div>test</div>;
function renderDecorated(params) {
  const DecoratedComponent = withUi(params)(Component);
  return Providers(<DecoratedComponent />);
}
describe('withUI', () => {
  it('should pass the UI state as a prop', () => {
    const renderedComponent = mount(renderDecorated());
    expect(renderedComponent.find(Component).prop('ui')).toBeDefined();
  });
});
