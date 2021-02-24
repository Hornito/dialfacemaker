import React from 'react'
import Blueprint from 'react-blueprint-svg'
import Dial from './Dial';

function App() {

  let model = new Dial();

  return (
    <div className="container">
        <Blueprint model={model}></Blueprint>
    </div>
  )
}

export default App