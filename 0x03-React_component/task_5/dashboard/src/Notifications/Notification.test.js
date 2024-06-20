import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('does not rerender with the same list of notifications', () => {
    const notifications = [
      { id: 1, content: 'New course available', priority: 'urgent' },
      { id: 2, content: 'New resume available', priority: 'urgent' },
      { id: 3, content: 'New notification', priority: 'urgent' },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setState({ notifications });

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ displayDrawer: true }); // Same props

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state('notifications')).toEqual(notifications); // State remains unchanged

    shouldComponentUpdateSpy.mockRestore();
  });

  test('rerenders with a longer list of notifications', () => {
    const notifications = [
      { id: 1, content: 'New course available', priority: 'urgent' },
      { id: 2, content: 'New resume available', priority: 'urgent' },
      { id: 3, content: 'New notification', priority: 'urgent' },
    ];

    const newNotifications = [
      ...notifications,
      { id: 4, content: 'Another new notification', priority: 'urgent' }
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setState({ notifications });

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ displayDrawer: true }); // Same props initially

    wrapper.setState({ notifications: newNotifications }); // Update state with longer list

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(2); // Called for initial render and when props changed
    expect(wrapper.state('notifications')).toEqual(newNotifications); // State reflects new list

    shouldComponentUpdateSpy.mockRestore();
  });
});
