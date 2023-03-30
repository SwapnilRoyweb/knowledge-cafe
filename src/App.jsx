import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import { useEffect } from 'react'
import Cafe from './Cafe/Cafe'
import History from './History/History'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <div className='container d-flex justify-content-between'>
        <Cafe></Cafe>
        <History></History>
      </div>
    </div>
  )
}

export default App;
