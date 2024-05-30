import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('NotificationItem Component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });
    
    it('renders a <li>', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.find('li')).toHaveLength(1);
    });
    
    it('renders a <li> with the right html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
    
    it('renders a <li> with the right text', () => {
        const wrapper = shallow(<NotificationItem value='test' />);
        expect(wrapper.text()).toContain('test');
    });
});