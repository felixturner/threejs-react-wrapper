import './App.css';
import { useControls } from 'leva';
import { ThreeWrapper } from './components/threeWrapper/ThreeWrapper';

function WrapperWithControls() {
  const { speedX, speedY, scale, mounted } = useControls({
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
    mounted: true,
  });
  return (
    <>
      {mounted && (
        <ThreeWrapper
          props={{ speedX: speedX, speedY: speedY, scale: scale }}
        />
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <WrapperWithControls />
    </div>
  );
}

export default App;
