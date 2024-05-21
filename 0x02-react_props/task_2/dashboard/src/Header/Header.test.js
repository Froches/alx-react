import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe('Header component', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
});

it('renders img and h1 tags correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
});

});