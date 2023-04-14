# threejs-react-wrapper

Simple wrapper to run vanilla ThreeJS code inside a React component.

Using React 18 and Vite server. (Latest as of April 2023).

Using [Leva](https://github.com/pmndrs/leva) GUI to show passing props from React -> ThreeJS.

## Philosophy

[React-three-fiber](https://github.com/pmndrs/react-three-fiber) is great if you want to write your ThreeJS code with JSX. If you prefer coding ThreeJS with vanilla JS, this template might be useful for you.

## Available Scripts

In the project directory, you can run:

`npm install` - Install dependencies.

`npm run dev` - Runs the app in dev mode.

`npm run build` - Build app to `dist` folder.

## Note on Double Rendering

If you view the console in dev mode, you will notice the ThreeJS init() and dispose() calls are fired twice on mount. This is caused by using [React.StrictMode](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development) which causes components to be rendered twice. Since the dispose() function cleans up properly you can safely ignore this issue.

## ScreenShot

![ScreenShot](./screen-shot.png 'ScreenShot')
