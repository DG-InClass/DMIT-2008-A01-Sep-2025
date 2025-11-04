// test/Byline.test.js

// Importing some functions to help with testing
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import component
import Byline from '../components/Byline';

test('byline should include the author name', () => {
    render(<Byline author="Dan Gilleland" />);
    const someElement = screen.getByText("by Dan Gilleland");
    expect(someElement).toBeInTheDocument();
});

test('byline should include some other author name', () => {
    render(<Byline author="Stewart Dent" />);
    const someElement = screen.getByText("by Stewart Dent");
    expect(someElement).toBeInTheDocument();
});

// TODO: byline should
//  - include the github username
//      - element with the text "dgilleland"
//      - element.href = "https://github.com/dgilleland"
//  - include a link to the author's website
//      - element with the text "website"
//      - element.href = "https://gilleland.ca"
//      - element.target = "_blank"
