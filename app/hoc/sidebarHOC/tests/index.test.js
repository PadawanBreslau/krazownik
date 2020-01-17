import React from 'react';

import { mount } from 'enzyme';
import Providers from 'helpers/testing/providers';
import withSidebar from '../index';

const Component = () => <div>test</div>;
function renderDecorated(params) {
  const DecoratedComponent = withSidebar(params)(Component);
  return Providers(<DecoratedComponent />);
}
describe('withSidebar', () => {
  it('should pass the sidebar data as a prop', () => {
    const renderedComponent = mount(renderDecorated());
    expect(renderedComponent.find(Component).prop('sidebarData')).toBeDefined();
  });
});
