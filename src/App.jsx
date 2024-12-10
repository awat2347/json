import React from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AdminPage from './Pages/AdminPage'


const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Admin' element={<AdminPage/>}/>

      </Routes>
    </>
  )
}

export default App