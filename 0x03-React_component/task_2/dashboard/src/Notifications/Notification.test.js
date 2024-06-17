import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const menuItem = wrapper.find('.menuItem');
    expect(menuItem.text()).toEqual('Your notifications');
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const notificationsDiv = wrapper.find('.Notifications');
    expect(notificationsDiv.exists()).toBe(false);
  });

  test('menu item is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menuItem = wrapper.find('.menuItem');
    expect(menuItem.text()).toEqual('Your notifications');
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationsDiv = wrapper.find('.Notifications');
    expect(notificationsDiv.exists()).toBe(true);
  });

  test('should call console.log with the right message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });

  test('should call console.log with the right message when close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.find('button').simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });
});
