import React from 'react'
import Logo from './svgs/Logo'
import GeminiIcon from './svgs/GeminiIcon'
import EmailIcon from './svgs/EmailIcon'
import GithubIcon from './svgs/GithubIcon'
import LinkedinIcon from './svgs/LinkedinIcon'

const Navbar = () => {
  return (
    <nav className='w-full h-auto grid grid-cols-12'>
        <section className="col-span-12 lg:col-span-8 h-16 grid grid-cols-12">
            <div className='col-span-4 grid-border !border-l-0 !border-t-0 flex items-center justify-center sm:justify-start px-2 lg:px-4'>
                <Logo className='h-12 w-12'/> 
                <div className='hidden sm:flex gap-1 lg:gap-2 text-sm sm:text-lg xl:text-2xl'>
                    <p className='text-primary font-semibold tracking-[1.5px]'>GAGAN</p>
                    <p className=' text-white font-thin tracking-[3px]'>CODES</p>
                </div>
            </div>
            <div className='col-span-8 grid-border -ml-[1px] !border-r-0 !border-t-0  flex items-center justify-center gap-2 md:gap-3'>
                <GeminiIcon className='h-6 w-6'/>
                <p className='text-primary ff-aalto text-4xl tracking-[1.5px] md:text-5xl md:tracking-[2px]'>
                    HOME
                </p>
            </div>
        </section>
        <section className='col-span-12 lg:col-span-4 h-16  grid grid-cols-12'>
        <div className='col-span-4 grid-border -ml-[1px] !border-r-0  !border-t-0 grid place-content-center'>
            <EmailIcon className='h-8 w-8 md:h-11 md:w-11'/>
        </div>
        <div className='col-span-4 grid-border -ml-[1px] !border-r-0  !border-t-0 grid place-content-center'>
            <GithubIcon className='h-8 w-8 md:h-11 md:w-11'/>
        </div>
        <div className='col-span-4 grid-border -ml-[1px] !border-r-0 !border-t-0 grid place-content-center'>
            <LinkedinIcon className='h-8 w-8 md:h-11 md:w-11'/>
        </div>
        </section>
    </nav>
  )
}

export default Navbar