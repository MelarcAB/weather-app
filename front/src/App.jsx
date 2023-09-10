import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home'
import Details from './views/Details'
function AppContent(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:city" element={<Details />} />
      </Routes>
    </div>
  )
}

function App() {

  return (
    <Router>
      <AppContent />
    </Router>

  )
}

export default App
