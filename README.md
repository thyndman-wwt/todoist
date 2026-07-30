## Building Todoist from Scratch Using React (Custom Hooks, Context), Firebase & React Testing Library (http://bit.ly/CognitiveSurge)

This application (a Todoist clone) was built using create-react-app as a base, and the technologies used were React (Custom Hooks, Context), Firebase & React Testing Library. I'm hoping this gives people a better understanding of React, and I've also included SCSS in this tutorial, but the main focus is to build a real application using React! If you clone this application, click the Pizza icon on the top right, it enables dark mode!

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!). One thing I didn't get time to do was incorporate accessibility into this application, so I'd love to see that added!

![Preview](todoist-preview.png?raw=true)

## Tech Stack

This project is built with the following technologies:

- **React** - A JavaScript library for building user interfaces with custom hooks and Context API
- **SCSS** - A CSS preprocessor for styling and theming (including dark mode support)
- **Jest** - A JavaScript testing framework for unit and integration tests

## Development

### Install Dependencies

To install the project dependencies, use either npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### Run the App Locally

To start the development server and run the app locally:

```bash
npm start
```

or

```bash
yarn start
```

The app will open in your browser at `http://localhost:3000`. The page will reload when you make changes to the code.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

or

```bash
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Running Tests

### Run the Test Suite

To run the test suite in watch mode:

```bash
npm test
```

or

```bash
yarn test
```

The test suite uses React Testing Library and is configured with Jest. Tests will automatically re-run when you make changes to the code. Press `q` to quit watch mode.

### Test Coverage

The project is configured with coverage thresholds requiring 90% coverage for branches, functions, lines, and statements. Coverage reports are generated in HTML and text formats.

### Troubleshooting

#### Problem: `npm install` fails with dependency conflicts

**Solution:** Clear your npm cache and try again:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

If you're using yarn, try:

```bash
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

#### Problem: Port 3000 is already in use

**Solution:** You can specify a different port when starting the development server:

```bash
PORT=3001 npm start
```

or with yarn:

```bash
PORT=3001 yarn start
```

Alternatively, you can kill the process using port 3000:

```bash
# On macOS/Linux
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Problem: Dev server fails to hot reload on WSL (Windows Subsystem for Linux)

**Solution:** WSL file system watchers have limitations. Add the following to your `package.json` to enable polling:

```bash
WATCHPACK_POLLING=true npm start
```

or with yarn:

```bash
WATCHPACK_POLLING=true yarn start
```

Alternatively, you can create a `.env` file in the project root with:

```
WATCHPACK_POLLING=true
```

This enables polling-based file watching instead of relying on native file system events, which resolves hot reload issues in WSL environments.

## License

This project is licensed under the MIT License.
