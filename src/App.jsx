// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { Suspense } from "react"
import { Navbar, Footer, NavButton } from "./components"
import { Routes, Route } from "react-router-dom"
import Loader from "./UI/Loader"
const Currencies = React.lazy(() => import("./pages/Currencies"))
const CurrencyDetails = React.lazy(() => import("./pages/CurrencyDetails"))
const Home = React.lazy(() => import("./pages/Home"))

import "./App.css"
import NewsPage from "./pages/NewsPage"

function App() {
  return (
    <>
      <section className="flex items-stretch container">
        <Navbar />
        <NavButton />
        <main className="pages p-5 pt-10 bg-[#DCF2F1] basis-full">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/currencies" element={<Currencies />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/currencies/:id" element={<CurrencyDetails />} />
            </Routes>
          </Suspense>
        </main>
      </section>
      <Footer />
    </>
  )
}

export default App
