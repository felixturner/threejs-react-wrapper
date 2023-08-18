# threejs-react-wrapper

A simple wrapper to run vanilla ThreeJS code inside a React component.

- Uses React 18 and Vite server. (Latest as of Aug 2023).
- Uses [Leva](https://github.com/pmndrs/leva) React GUI to show passing props from React -> ThreeJS.

## Philosophy

[React-three-fiber](https://github.com/pmndrs/react-three-fiber) is great if you want to write your ThreeJS code with JSX. If you prefer coding ThreeJS with vanilla JS, this template might be useful for you.

## Available Scripts

In the project directory, you can run:

- `npm install` - Install dependencies.
- `npm run dev` - Runs the app in dev mode.
- `npm run build` - Build app to `dist` folder.

## Note on Double Rendering in Dev Mode

In Dev mode you will notice the ThreeJS init() and dispose() calls are fired twice on mount. This is caused by using [React.StrictMode](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development) which causes components to be rendered twice. Since the dispose() function cleans up properly you can safely ignore this issue. Double render does not happen in production mode.

## Note on Resizing

In this example, the ThreeJS canvas size is defined by the `#canvas-container` CSS. ThreeJS resizing logic is fired by a `ResizeObserver` to allow changing the size of the canvas from React.

## ScreenShot

![ScreenShot](./screen-shot.png 'ScreenShot')
