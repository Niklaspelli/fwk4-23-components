# FWK4-Components

## Introduction

`fwk4-components` is a library of small, reusable components that can be used to build flexible and modular applications. The purpose of this repository is to enable fast and efficient development by providing predefined components that can be combined and customized for various projects.

## Installation

To install and use `FWK4-components` in your project, follow the steps below:

## NPM LINK

1. Add a index.js directly in the src. and import the big components (Login, Register, Home, Worplace, InfoUser)
2. configure the package.json file and add "main": "./src/index.js", after version.
3. From your components type in bash/terminal ```npm link
4. In the package.json find the name "name" for the file.
5. The create an app using ```npm create vite@latest
6. `npm install`
7. `npm link "name of the component" `
8. import the component you want in app.jsx from the library.
   Notice if you want to uppdate your library you need to do step 3 and step 7 to update.

### NPM

1. Install via npm:
   ```bash
   npm i @niklaspelli/fwk4-23-components
   ```

### Components in the library:

- universalButton: A simple button component (universal).
- Login: Login component
- Register: Register component
- Search: Search component (universal)
- Headlines:
- Logo:
- Label:
- InfoUser:
- InputField: A text field component with validation.
- Cards: A card component for displaying content.

### Storybook

1.  Install via npm:

```bash
npm run storybook
```
