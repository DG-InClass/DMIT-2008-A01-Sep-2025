// tests/TodoList.test.js

// Importing some functions to help with testing
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import the component we want to test
import TodoList from '../components/TodoList';

// Now, we can write our tests.
// (note: the jest.config.js settings are making the `test()` function globally available)

test('todo list title renders correctly', () => {
    render(<TodoList />);
    const titleElement = screen.getByText("Our Todo List");
    expect(titleElement).toBeInTheDocument();
});

test('todo is added successfully', () => {
    // Arrange - set up all the things needed
    render(<TodoList />);
    const inputElement = screen.getByLabelText('New Todo');
    const buttonElement = screen.getByText('Add Todo');
    const listElement = screen.getByTestId('todo-item-list');
    const EXPECTED_STRING = "Learn Testing in JavaScript";

    // let's put the text in our input element
    fireEvent.change(inputElement, {
        target: { value: EXPECTED_STRING }
    });
    // let's just do a quick "sanity-check" expecation
    // on this pre-condition
    expect(inputElement.value).toBe(EXPECTED_STRING);

    // Act - do the thing that we are testing
    act(()=> {
        buttonElement.click();
    });

    // Assert - see if it worked as expected
    expect(inputElement.value).toBe("");
    expect(listElement).toHaveTextContent(EXPECTED_STRING);
});
