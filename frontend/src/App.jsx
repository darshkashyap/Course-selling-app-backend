import { useState } from 'react'
import './App.css'
import './index.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Home from '../pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup />} />
        
         
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
