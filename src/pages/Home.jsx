import React, { useState, useEffect } from 'react'
import HomeDesk from '../components/HomeDesk'
import HomeMob from '../components/HomeMob'

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {windowWidth < 1024 ? <HomeMob /> : <HomeDesk />}
    </>
  )
}

export default Home
