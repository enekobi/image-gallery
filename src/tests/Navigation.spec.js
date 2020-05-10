import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Navigation } from '../components/Navigation/Navigation';

describe('Navigation', () => {
  let mockProps;
  beforeEach(() => {
    mockProps = {
      close: jest.fn(),
      previous: jest.fn(),
      next: jest.fn(),
      isOpen: false,
      currentImage: {
        title: 'mock-title',
        images: {
          downsized_large: {
            url: 'too-nested'
          }
        }
      }
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should render without exploding', () => {
    render(<Navigation {...mockProps} />);
  });

  it('should be hidden when isOpen is falsy', () => {
    const { container } = render(<Navigation {...mockProps} />);
    const component = container.querySelector('.nav--hidden');
    expect(component).not.toBe(null);
  });

  describe('once opened', () => {
    beforeEach(() => {
      mockProps.isOpen = true;
    });

    it('should be visible when isOpen is falsy', () => {
      expect.assertions(2);
      const { container } = render(<Navigation {...mockProps} />);
      const hidden = container.querySelector('.nav--hidden');
      const visible = container.querySelector('.nav');
      expect(visible).not.toBe(null);
      expect(hidden).toBe(null);
    });

    it('clicking left arrow should go for the previous item', () => {
      const { getByTestId } = render(<Navigation {...mockProps} />);
      const prevButton = getByTestId('prev');
      fireEvent.click(prevButton);
      expect(mockProps.previous).toHaveBeenCalled();
    });

    it('clicking right arrow should go for the next item', () => {
      const { getByTestId } = render(<Navigation {...mockProps} />);
      const nextButton = getByTestId('next');
      fireEvent.click(nextButton);
      expect(mockProps.next).toHaveBeenCalled();
    });

    it('clicking slider to play should hide the arrows', () => {
      expect.assertions(2);
      const { getByTestId } = render(<Navigation {...mockProps} />);
      const sliderControl = getByTestId('slider');
      fireEvent.click(sliderControl);
      const nextButton = getByTestId('next');
      const prevButton = getByTestId('prev');
      expect(nextButton).not.toBeVisible();
      expect(prevButton).not.toBeVisible();
    });

    it('clicking close should close the navigation using props', () => {
      const { getByTestId } = render(<Navigation {...mockProps} />);
      const closeButton = getByTestId('close');
      fireEvent.click(closeButton);
      expect(mockProps.close).toHaveBeenCalled();
    });
  });
});
