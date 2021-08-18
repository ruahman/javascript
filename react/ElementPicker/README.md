# Simple Website Builder

## Introduction

This task evaluates the candidate's skills in `React` and `Redux`.

Welcome to the Simple Website Builder application. This app is an initial implementation of WYSIWYG editor that enables users to build a simple website just by picking HTML tags from the widget and filling all the attributes they need.

# Setup

This react application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

## Problem Statement

1. Make tests pass by implementing missing features in the production code.
2. Make the app work in a way described below. The majority of the code is committed, but there are some missing pieces that have to be implemented.

## TODOs

1. Reshape the root reducer in order to allow adding new reducers in the future. Currently the root reducer _is_ just the `componentsReducer` (from `store/components/reducer.js`) and the root state object reflects the state object of `componentReducer`. Use reducer composition tools (built in to redux) to nest the `componentsReducer` under `components` key (in other words, `items` should be available under `state.components.items` instead of `state.items`).
2. The `removeComponent` action creator is missing. It should be implemented.
3. Handle the `ADD_COMPONENT` action in `store/components/reducer.js`.
4. Handle the  `UPDATE_COMPONENT` action in `store/components/reducer.js`.
5. Handle the `REMOVE_COMPONENT` action in `store/components/reducer.js`.
6. Handle the `SET_EDITED_COMPONENT` action in `store/components/reducer.js`.
7. The `a` HTML tag (link) has missing implementation in the `components/Components/A.js` file that needs to be fixed. After clicking on the link, a new tab should open. Browsing context that is created by following this link should not have the opener browsing context (for example, new window shouldn't be able to use `window.opener` JS property to change original page). Furthermore, referrer information shouldn't be passed to the new tab.
8. The `img` HTML tag (image) has missing implementation in the `components/Components/Img.js` file that needs to be fixed.
9. The items of the components picker should be greyed out with the `components-picker__component--disabled` class and they should not be clickable when a component is being edited.

## Good Luck!
