import { useEffect, useRef } from 'react';
import { init, dispose, setProps } from './js/main.js';
import './threeWrapper.css';

/*

  A simple functional component to mount and unmount threejs scene

*/

export function ThreeWrapper(props) {
  const glCanvas = useRef(); //ref to webgl canvas
  useEffect(() => {
    //do on mount
    init(glCanvas.current);
    return () => {
      //do on unmount
      dispose();
    };
  }, []); // <-- this empty array makes useEffect only run once
  useEffect(() => {
    setProps(props.props); //not sure why this is nested?
  }, [props]);
  return (
    <div id="canvas-container">
      <canvas ref={glCanvas} />
    </div>
  );
}
