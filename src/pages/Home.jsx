import React, { useState, useEffect } from 'react'
import HomeDesk from '../components/HomeDesk'
import HomeMob from '../components/HomeMob'
import useWindowWidth from '../hooks/useWindowWidth';

const Home = () => {
  const windowWidth = useWindowWidth();
  

  return (
    <>
      {windowWidth < 1024 ? <HomeMob /> : <HomeDesk />}
    </>
  )
}

export default Home
