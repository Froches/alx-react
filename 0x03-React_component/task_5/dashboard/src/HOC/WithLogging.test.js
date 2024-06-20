import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login';

// Mock the console.log function
console.log = jest.fn();

describe('WithLogging HOC', () => {
  beforeEach(() => {
    // Clear all instances and calls to console.log
    console.log.mockClear();
  });

  it('should log mount and unmount for a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log mount and unmount for the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});