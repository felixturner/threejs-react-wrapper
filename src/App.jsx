import { useControls } from 'leva';
import { ThreeWrapper } from './components/threeWrapper/ThreeWrapper';

function App() {
  //create Leva controls
  const { mounted, speed, scale } = useControls({
    mounted: true,
    speed: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },

    scale: {
      value: 1,
      min: 0.5,
      max: 2,
      step: 0.1,
    },
  });

  //pass Leva values as props to ThreeWrapper
  return mounted && <ThreeWrapper speed={speed} scale={scale} />;
}

export default App;
