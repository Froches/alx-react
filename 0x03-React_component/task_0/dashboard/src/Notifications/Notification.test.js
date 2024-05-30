import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const menuItem = wrapper.find('div').at(0); // Assuming the first div is the menu item
    expect(menuItem.text()).toEqual('Your notifications');
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const notificationsDiv = wrapper.find('.Notifications');
    expect(notificationsDiv.exists()).toBe(false);
  });

  test('menu item is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menuItem = wrapper.find('div').at(0); // Assuming the first div is the menu item
    expect(menuItem.text()).toEqual('Your notifications');
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationsDiv = wrapper.find('.Notifications');
    expect(notificationsDiv.exists()).toBe(true);
  });
});

