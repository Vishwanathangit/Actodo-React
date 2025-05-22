import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'


function App() {
      const [users, setusername] = useState(
          [
              {
                  username: "Vishwa",
                  password: "123"
              }
          ]
      )

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusername={setusername} />}></Route>
          <Route path='/signup' element={<Signup users={users} setusername={setusername} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
