import { useState } from 'react'
import './App.css'
import { motion } from "motion/react"

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';  
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative h-screen w-full main-container'>
    <Navbar />
    <section className='content-container'>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blog_id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
    </main>
  )
}

export default App
