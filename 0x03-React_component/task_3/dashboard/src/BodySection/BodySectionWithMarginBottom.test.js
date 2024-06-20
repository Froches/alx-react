import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

describe('<BodySectionWithMarginBottom />', () => {
    it('should render correctly a BodySectionWithMarginBottom component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title='test title'>
                <p>Test children node</p>
            </BodySectionWithMarginBottom>
        );

        const bodySection = wrapper.find(BodySection);
        expect(bodySection.length).toBe(1);
        expect(bodySection.prop('title')).toBe('test title');
        expect(bodySection.contains(<p>Test children node</p>)).toBe(true);

        expect(wrapper.find('.bodySectionWithMargin').length).toBe(1);
    });
});