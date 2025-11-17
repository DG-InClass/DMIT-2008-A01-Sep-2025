// tests/Home.test.js
import 'isomorphic-fetch'; // needed for no "fetch is not defined" errors

import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { http, HttpResponse } from 'msw'; // this will mock the REST calls
import { setupServer } from 'msw/node';   // We'll use a "mock" server for Node

import { BASE_URL } from '../utils/api/base.js'; //
import Home from '../pages/index.js';

// The following code is for mocking the Web Server responses in our tests
// (move to another file if you have several unit-test files that need this)
const QUOTE = "A computer program is a set of instructions for manipulating information.";
const AUTHOR = "Dan Gilleland";

const server = setupServer(
    // Generate a "handler" for an URL
    http.get(`${BASE_URL}/random`, (res, req, ctx) => {
        // res: the response of the web server
        // req: the request to the web server
        // ctx: the context (look up the details in the mws docs)
        // Here is what we will return for the server response...
        return HttpResponse.json({
            content: QUOTE,
            author: AUTHOR
        });
    })
);

// ... end of mocking web server responses

// Common setup/teardown actions for testing
beforeAll(() => {
    // Before running all the tests, make sure
    // the web server is listening to requests
    server.listen();
});

afterAll(() => {
    // Remember to shut down the web server
    server.close();
});

// Finally... we get to write our unit tests of our components

// Note that this test uses an async - this is because our <Home />
// component depends on an asychonous useEffect
test("home loads a quote on load", async() => {
    // Render the component
    await act(() => {
        render(<Home />);
    });

    // get the author and quote elements
    let quoteElement = screen.getByTestId("quote");
    let authorElement = screen.getByTestId("author");

    // check to see that they are equal to the new values
    expect(quoteElement).toHaveTextContent(QUOTE);
    expect(authorElement).toHaveTextContent(AUTHOR);
});
