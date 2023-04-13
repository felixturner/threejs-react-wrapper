import './App.css';
import { ThreeWrapper } from './components/threeWrapper/ThreeWrapper';
import { useControls } from 'leva';

/*
  This App.js conditionally adds/removes a ThreeWrapper component 
  based on the threeLoaded state variable
*/

function MyComponent() {
  const { speedX, speedY, scale } = useControls({
    speedX: {
      value: 0.15,
      min: 0,
      max: 0.3,
      step: 0.01,
    },
    speedY: {
      value: 0.15,
      min: 0,
      max: 0.3,
      step: 0.01,
    },
    scale: {
      value: 1,
      min: 0.5,
      max: 4,
      step: 0.1,
    },
  });
  return (
    <ThreeWrapper props={{ speedX: speedX, speedY: speedY, scale: scale }} />
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
