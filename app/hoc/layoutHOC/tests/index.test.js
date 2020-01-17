import React from 'react';

import { mount } from 'enzyme';
import Providers from 'helpers/testing/providers';
import LayoutCandidate from 'components/Layout/LayoutCandidate';
import LayoutSimplified from 'components/Layout/LayoutSimplified';
import withLayout from '../index';

const Component = () => <div>test</div>;
function renderDecorated(params) {
  const DecoratedComponent = withLayout(params)(Component);
  return Providers(<DecoratedComponent data={{ client: 'user' }} />);
}
describe('withLayout', () => {
  it('should pass ui as a prop', () => {
    const renderedComponent = mount(renderDecorated({ navigation: 'simple' }));

    expect(renderedComponent.find(Component).prop('ui')).toBeDefined();
  });

  it('should render LayoutCandidate component when type candiate passed', () => {
    const renderedComponent = mount(renderDecorated({ navigation: 'simple', type: 'candidate' }));

    expect(renderedComponent.find(<LayoutCandidate />)).toBeDefined();
  });

  it('should render LayoutSimplified component when type candiate passed', () => {
    const renderedComponent = mount(renderDecorated({ navigation: 'simple', type: 'simplified' }));

    expect(renderedComponent.find(<LayoutSimplified />)).toBeDefined();
  });
});
