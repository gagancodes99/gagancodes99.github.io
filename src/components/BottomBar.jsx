import React from 'react'
import ArrowIcon from './svgs/ArrowIcon'
import { Link } from 'react-router-dom'

const BottomBar = () => {
  return (
    <nav className='fixed bottom-0 bg-black h-[64px] lg:h-[72px] w-full grid grid-cols-12 ff-aalto uppercase text-3xl xl:text-4xl tracking-wider '>
        <div className='hidden sm:grid place-content-center sm:col-span-6 opacity-90  grid-border !border-r-0 !border-b-0 px-2'>
            09:18:33 PM-02 MAY 25
        </div>

        <Link to={'/works'} className='h-full col-span-6 sm:col-span-3 grid-border !border-b-0 !border-r-0 flex gap-6 md:gap-4 xl:gap-8 items-center justify-center opacity-90 px-2'>
            Works <ArrowIcon className='h-4 md:h-5 xl:h-6 w-auto fill-white'/>
        </Link>
        <Link to={'/blogs'} className='h-full col-span-6 sm:col-span-3 grid-border !border-b-0 !border-r-0 flex gap-6 md:gap-4 xl:gap-8 items-center justify-center opacity-90 px-2'>
            Blogs <ArrowIcon className='h-4 md:h-5 xl:h-6 w-auto fill-white'/>
        </Link>
    </nav>
  )
}

export default BottomBar