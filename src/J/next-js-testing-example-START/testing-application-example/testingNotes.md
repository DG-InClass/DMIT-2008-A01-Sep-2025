# Testing Notes

Start by getting the packages installed - `npm install`.

We're going to add four Developer Dependencies: `npm install -D <package>`

- `jest`
- `jest-environment-jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`

Next, add a file called `jest.config.js`.

Now we are ready to add in a couple of scripts in `package.json` to run our tests.

```json
  "test": "jest",
  "test:watch": "jest --watch"
```

With all of that in place, we can start the **test runner** (jest) in watch mode:

```ps
npm run test:watch
```

