# InterfazVue

This template should help get you started developing with Vue 3 in Vite.

![image](https://github.com/user-attachments/assets/167f6a73-cc4c-4ac9-a187-bc5ed7964cbc)


![image](https://github.com/user-attachments/assets/8529411a-470e-42fd-9c8c-5c0b8c4aec3d)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```
