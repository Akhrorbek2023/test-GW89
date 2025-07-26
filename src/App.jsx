import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Navbar from './components/Navbar'
import FormSingle from './components/FormSingle'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/:id' element={<FormSingle/>}/>
      </Routes>
    </div>
  )
}

export default App