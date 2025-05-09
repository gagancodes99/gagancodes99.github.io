import React, { useEffect, useState } from 'react'
import ArrowIcon from './svgs/ArrowIcon'
import { Link, useLocation, useParams } from 'react-router-dom'
import Timer from './ui/Timer';

const BottomBar = () => {
  const { pathname } = useLocation();
  const allRoutes = ['/', '/works', '/blogs'];
  let bottomNav;
  let currPath = pathname.split('/')
  if (currPath[1] === 'blog') {
    bottomNav = ['/', '/works']; // hardcoded for /blog
  } else {
    bottomNav = allRoutes.filter(route => route !== pathname);
  }
  return (
    <nav className='fixed bottom-0 bg-black h-[64px] lg:h-[72px] w-full grid grid-cols-12 ff-aalto uppercase text-3xl xl:text-4xl tracking-wider max-w-[1799px] grid-border !border-y-0 '>
        <div className='hidden sm:grid place-content-center sm:col-span-5 lg:col-span-3 opacity-90  grid-border !border-l-0 !border-r-0 !border-b-0 px-2'>
          <Timer />
        </div> 
        <div className='hidden sm:grid sm:col-span-3 lg:col-span-5 grid-border !border-r-0 !border-b-0'>

        </div>
        {bottomNav.map((route) => (
        <Link
          key={route}
          to={route}
          className='h-full col-span-6 sm:col-span-2 grid-border !border-b-0 !border-r-0 flex gap-6 md:gap-4 xl:gap-8 items-center justify-center opacity-90 px-2'
        >
          {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
          <ArrowIcon className='h-4 md:h-5 xl:h-6 w-auto fill-white' />
        </Link>
      ))}
    </nav>
  )
}

export default BottomBar