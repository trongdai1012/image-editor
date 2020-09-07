import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import Upload from './Upload';
import './App.css';
import Template1 from './Template1';

function App() {
  const refApp = useRef();
  useEffect(() => {
    console.log('refApp', refApp)
  }, [refApp] )

  return (
    <div className="App" ref={refApp}>
      <Upload accept='image/*' />
      {refApp ?
        <Template1 widthApp={refApp} heightApp={refApp} /> : null
      }

    </div >
  );
}

export default App;
