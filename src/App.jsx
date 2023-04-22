import { useState } from 'react'
import vacaciones from './cronograma3.json'
import RenderDia from './RenderDia'
import { useEffect } from 'react';

import './App.css'

function App() {


  return (
    <>
     <div  >
    { 
      <RenderDia vacaciones={vacaciones}  
      fechaActual={new Date().toISOString().slice(0, 10)}
      />
    }
  </div>,

    </>
  )
}

export default App
