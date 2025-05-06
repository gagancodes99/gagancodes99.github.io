import React, { useEffect, useState } from 'react'
import WorkMob from '../components/WorkMob'
import WorkDesk from '../components/WorkDesk'

const Works = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  return (
    <>
      {windowWidth < 1024 ? <WorkMob/> : <WorkDesk />}
    </>
  )
}

export default Works