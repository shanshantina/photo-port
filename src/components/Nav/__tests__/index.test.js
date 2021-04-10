import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

// check if the emoji camera is showed up
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav />);
        // assert, to match the "aria-label" in JSX
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav />);
        // asset
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    })
});