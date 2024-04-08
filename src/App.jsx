import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
          <link 'blue.jsx'> </link> 
          <link 'red.jsx'/> </link>
      </div>

      <div id="main-section">
   <Routes>
    <Route path='/' elmenent= './Home.jsx' />
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
   </Routes>
     </div>
     </div>
    </>
  )
}

export default App
