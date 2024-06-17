import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem id={1} />);
    });

    it('renders a <li>', () => {
        const wrapper = shallow(<NotificationItem id={1} />);
        expect(wrapper.find('li')).toHaveLength(1);
    });

    it('renders a <li> with the right html', () => {
        const wrapper = shallow(<NotificationItem id={1} html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    it('renders a <li> with the right text', () => {
        const wrapper = shallow(<NotificationItem id={1} value='test' />);
        expect(wrapper.text()).toContain('test');
    });

    it('should call markAsRead with the correct ID when clicked', () => {
        const markAsReadSpy = jest.fn();
        const wrapper = shallow(<NotificationItem id={1} type="urgent" value="Test content" markAsRead={markAsReadSpy} />);
        wrapper.find('li').simulate('click');
        expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });
});
