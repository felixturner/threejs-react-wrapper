import { useState } from 'react';
import './App.css';
import { ThreeWrapper } from './components/threeWrapper/ThreeWrapper';

/*
  This App.js conditionally adds/removes a ThreeWrapper component 
  based on the threeLoaded state variable
*/

function App() {
  const [threeLoaded, setThreeLoaded] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setThreeLoaded(!threeLoaded)}>
        <h3>{!threeLoaded ? 'Load' : 'Unload'} Threejs</h3>
      </button>
      {threeLoaded && <ThreeWrapper />}
    </div>
  );
}

export default App;
