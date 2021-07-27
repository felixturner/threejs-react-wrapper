import React, { useEffect, useRef } from 'react';
import { init, dispose } from './js/main.js';
import './threeWrapper.css';

/*

  A simple functional component to mount and unmount threejs scene

*/

export function ThreeWrapper() {
  const glCanvas = useRef(); //ref to webgl canvas
  useEffect(() => {
    //do on mount
    init(glCanvas.current);
    return () => {
      //do on unmount
      dispose();
    };
  }, []); // <-- this empty array makes useEffect only run once
  return (
    <div id="canvas-container">
      <canvas ref={glCanvas} />
    </div>
  );
}
