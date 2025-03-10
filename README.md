# AQA_Task
Playlist App Playwright Tests

## Setup
1. Clone the repo:
   ```sh
   git clone https://github.com/Illiantin/AQA_Task.git
   cd AQA_Task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```

## Running Tests
Run all tests:
```sh
npx playwright test
```
Run tests in headed mode:
```sh
npx playwright test --headed
```

## Features Tested
- Search functionality
- Add Track Using "+" Button
- Verify Total Duration of the Playlist in Seconds

## Code Quality
- ESLint and Prettier are used for code quality.
- Run `npm run lint` to check formatting.
*/
