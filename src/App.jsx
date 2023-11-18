import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import WorksPage from './components/WorksPage'
import ContactPage from './components/ContactPage'

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
    <>
     <Navbar></Navbar>
     <AnimatePresence mode='wait'>
     <Routes location={location} key={location.pathname}>
      <Route index element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/works' element={<WorksPage />}></Route>
      <Route path='/contacts' element={<ContactPage />}></Route>
     </Routes>
     </AnimatePresence>
    </>
  )
}

export default App
