import React, { useEffect } from 'react';
import { init, dispose } from './js/main.js';
import './threeWrapper.css';

/*

  A simple functional component to mount and unmount threejs scene

*/

export function ThreeWrapper() {
  useEffect(() => {
    //do on mount
    init();
    return () => {
      //do on unmount
      dispose();
    };
  }, []); // <-- this empty array makes useEffect only run once
  return <div className="webgl"></div>;
}
