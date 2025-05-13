import React from 'react'

const HomeLights = () => {
  return (
    <>
        <ambientLight intensity={0.3} />
        <directionalLight
            color={'#fff'}
            intensity={1.2}
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <spotLight
            intensity={2}
            position={[0, 5, 5]}
            angle={0.3}
            penumbra={1}
            castShadow
        />
    </>
  )
}

export default HomeLights