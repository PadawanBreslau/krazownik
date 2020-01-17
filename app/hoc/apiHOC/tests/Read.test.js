import React from 'react';
import { mount } from 'enzyme';
import Providers from 'helpers/testing/providers';
import { withApiRead } from 'hoc/apiHOC';

import Connection from 'helpers/Connection';
jest.mock('helpers/Connection');

const ExampleComponent = () => <div>test</div>;
const exampleOptions = {
  storeName: 'testStore',
  api: {
    get: '/test',
  },
};

function renderDecorated(params) {
  const DecoratedComponent = withApiRead(params)(ExampleComponent);
  return Providers(<DecoratedComponent />);
}
describe('withApiRead', () => {
  it('should fetch the initial data on mount', () => {
    mount(renderDecorated(exampleOptions));
    expect(Connection.get).toHaveBeenCalledWith(exampleOptions.api.get);
  });
  it('should render the component', () => {
    const renderedComponent = mount(renderDecorated(exampleOptions));
    expect(renderedComponent.find(ExampleComponent).length).toBe(1);
  });
  it('should pass the data state as a prop', () => {
    const renderedComponent = mount(renderDecorated(exampleOptions));
    expect(renderedComponent.find(ExampleComponent).prop('data')).toBeDefined();
  });
});
