import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import './App.css'
import Loader from './components/Loader';
const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const Cart = lazy(() => import('./pages/Cart'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
