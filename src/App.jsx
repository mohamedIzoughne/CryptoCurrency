// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './pages/Home'

import { Navbar, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import Currencies from './pages/Currencies'
import CurrencyDetails from './pages/CurrencyDetails'

import './App.css'

function App() {
  return (
    <>
      <section className='flex items-stretch container'>
        <Navbar />
        <main className='pages p-5 pt-10 bg-blue-50 basis-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/currencies/:id' element={<CurrencyDetails />} />
          </Routes>
        </main>
      </section>
      <Footer />
    </>
  )
}

export default App
