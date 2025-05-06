import React, { useEffect, useState } from 'react'
import WorkMob from '../components/WorkMob'
import WorkDesk from '../components/WorkDesk'
import useWindowWidth from '../hooks/useWindowWidth'

const Works = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth < 1024 ? <WorkMob/> : <WorkDesk />}
    </>
  )
}

export default Works