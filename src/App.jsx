import React from 'react'
import LiveClock from './components/LiveClock'
import FormHandling from './components/FormHandlingUsingManually'
import FormHandlingUsingRHF from './components/FormHandlingUsingRHF'

const App = () => {
  return (
    <div className='w-screen h-screen '>
      {/* <LiveClock/> */}
      {/* <FormHandling/> */}
      <FormHandlingUsingRHF/>

      
    </div>
  )
}

export default App
