import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
import ContactForm from "..";

afterEach(cleanup);

describe('ContactForm', () => {
    // first test
    it('renders', () => {
        render(<Contact />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('renders', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    expect(getByTestId('button')).toHaveTextContent('Submit');
})
