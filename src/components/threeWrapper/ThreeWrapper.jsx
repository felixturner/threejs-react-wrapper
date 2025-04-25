import { useEffect, useRef } from 'react';
import { init, dispose, setProps } from './js/main.js';

/*
  A simple React component to mount and unmount a ThreeJS scene
*/

export function ThreeWrapper(props) {
  const glCanvas = useRef(); //ref to webgl canvas
  const glContainer = useRef(); //ref to webgl canvas container

  useEffect(() => {
    //do on mount
    init(glCanvas.current, glContainer.current);
    return () => {
      //do on unmount
      dispose();
    };
  }, []); // run once on page load

  useEffect(() => {
    //when props change, send into webgl
    setProps(props);
  }, [props]);

  return (
    <div ref={glContainer} className="gl-container">
      <canvas ref={glCanvas} />
    </div>
  );
}
