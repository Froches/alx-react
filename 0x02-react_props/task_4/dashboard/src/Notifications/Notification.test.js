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

  test('renders correctly with an empty array or no listNotifications property', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  test('renders list of notifications correctly', () => {
    const notifications = [
      { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
      { id: 2, html: { __html: 'Notification 2' }, type: 'urgent' },
      { id: 3, html: { __html: 'Notification 3' }, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find('NotificationItem').length).toBe(notifications.length);
  });

  test('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });

  test('displays "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('No new notification for now');
  });
});

