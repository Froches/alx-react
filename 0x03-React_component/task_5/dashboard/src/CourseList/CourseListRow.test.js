import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  describe('When isHeader is true', () => {
    test('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      render(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
      
      const cell = screen.getByText('First Cell');
      expect(cell).toBeInTheDocument();
      expect(cell.tagName).toBe('TH');
      expect(cell).toHaveAttribute('colSpan', '2');
    });

    test('renders two cells when textSecondCell is present', () => {
      render(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      
      const firstCell = screen.getByText('First Cell');
      const secondCell = screen.getByText('Second Cell');
      
      expect(firstCell).toBeInTheDocument();
      expect(firstCell.tagName).toBe('TH');
      expect(firstCell).not.toHaveAttribute('colSpan');

      expect(secondCell).toBeInTheDocument();
      expect(secondCell.tagName).toBe('TH');
    });
  });

  describe('When isHeader is false', () => {
    test('renders correctly two td elements within a tr element', () => {
      render(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      
      const row = screen.getByRole('row');
      const cells = screen.getAllByRole('cell');
      
      expect(row).toBeInTheDocument();
      expect(cells.length).toBe(2);

      expect(cells[0]).toHaveTextContent('First Cell');
      expect(cells[1]).toHaveTextContent('Second Cell');
    });
  });
});
