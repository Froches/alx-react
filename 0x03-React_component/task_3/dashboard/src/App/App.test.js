import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import './App.css';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });

  it('contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

describe('App component', () => {
  test('CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

describe('When isLoggedIn is true', () => {
  test('Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
  });

    test('CourseList component is included', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

  describe('App component', () => {
    it('calls logOut function and alerts when Control + H is pressed', () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(global, 'alert').mockImplementation(() => {});
  
      const wrapper = shallow(<App logOut={logOutMock} />);
      const instance = wrapper.instance();
  
      // Simulate Control + H press
      instance.forceUpdate(); // Trigger re-render to attach event listeners
      window.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));
  
      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();
  
      alertMock.mockRestore();
    });
  });
});

describe('App component', () => {
  let wrapper;
  let logOutMock;
  let alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('should call logOut and alert when ctrl+h is pressed', () => {
    // Simulate keydown event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});