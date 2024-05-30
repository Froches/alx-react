import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
    const courseList = screen.getByRole('table');
    expect(courseList).toBeInTheDocument();
  });

  test('renders the 5 different rows', () => {
    render(<CourseList />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(5);
  });

  test('renders correctly with an empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.text()).toContain('No course available yet');
  });

  test('renders list of courses correctly', () => {
    const courses = [
      { id: 1, name: 'Mathematics', credit: 3 },
      { id: 2, name: 'Physics', credit: 4 },
      { id: 3, name: 'Chemistry', credit: 2 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const courseItems = wrapper.find('tr');
    expect(courseItems.length).toBe(courses.length + 1);
  });
});
