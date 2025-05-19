import React, { useEffect, useState } from 'react'
import Logo from './svgs/Logo'
import GeminiIcon from './svgs/GeminiIcon'
import EmailIcon from './svgs/EmailIcon'
import GithubIcon from './svgs/GithubIcon'
import LinkedinIcon from './svgs/LinkedinIcon'
import { Link, useLocation, useParams } from 'react-router-dom'
import ScanCode from './svgs/ScanCode'
import Modal from './ui/Modal'

const Navbar = () => {
    const {pathname} = useLocation();
    const [currPath, setCurrPath] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
        const [, firstSegment] = pathname.split('/');
        setCurrPath(firstSegment||'home')
    },[pathname])

  return (
    <>
        <nav className='w-full h-auto grid grid-cols-12 fixed top-0 bg-black z-50 max-w-[1799px]'>
            <section className="col-span-12 lg:col-span-8 h-16 grid grid-cols-12">
                <Link to={'/'} tabIndex={1} className='col-span-4 grid-border !border-l-0 !border-t-0 flex items-center justify-center sm:justify-center px-2 lg:px-4'>
                    <Logo className='h-12 w-12'/> 
                    <div className='hidden sm:flex gap-1 lg:gap-2 text-sm sm:text-lg xl:text-2xl'>
                        <p className='text-primary font-semibold tracking-[1.5px]'>GAGAN</p>
                        <p className=' text-white font-thin tracking-[3px]'>CODES</p>
                    </div>
                </Link>
                <div className='col-span-8 grid-border !border-x-0 !border-t-0  flex items-center justify-center gap-2 md:gap-3'>
                    <GeminiIcon className='h-6 w-6'/>
                    <p className='text-primary ff-aalto text-4xl tracking-[1.5px] md:text-5xl md:tracking-[2px]'>
                        {currPath}
                    </p>
                </div>
            </section>
            <section className='col-span-12 lg:col-span-4 h-16  grid grid-cols-12'>
            <div onClick={()=>setIsModalOpen(!isModalOpen)} tabIndex={2} className='col-span-3 grid-border !border-r-0  !border-t-0 grid place-content-center'>
                <ScanCode className='h-7 w-7 md:h-8 md:w-8'/>
            </div>
            <a href='mailto:akashparmar6561@gmail.com' target='_blank' tabIndex={2} className='col-span-3 grid-border !border-r-0  !border-t-0 grid place-content-center'>
                <EmailIcon className='h-8 w-8 md:h-10 md:w-10'/>
            </a>
            <a href='https://github.com/akash-cloud001' target='_blank' tabIndex={3} className='col-span-3 grid-border !border-r-0  !border-t-0 grid place-content-center'>
                <GithubIcon className='h-8 w-8 md:h-10 md:w-10'/>
            </a>
            <a href='https://linkedin.in' target='_blank' tabIndex={4} className='col-span-3 grid-border !border-r-1 !border-t-0 grid place-content-center'>
                <LinkedinIcon className='h-8 w-8 md:h-10 md:w-10'/>
            </a>
            </section>
        </nav>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <section className='w-full max-w-xl h-auto bg-black flex flex-col sm:flex-row items-center sm:gap-20'>
                    <Logo className='h-32 block sm:hidden' />
                <img src="/images/qrcode.png" alt="" className='w-56 aspect-auto'/>
                <div className='flex flex-col items-center justify-between mt-3'>
                    <Logo className='h-32 hidden sm:block' />
                    <p className='text-6xl ff-aalto tracking-wide mb-3'>
                        <span className='text-primary'>GAGAN</span> <span className='text-white/90'>CODES</span>
                    </p>
                </div>
            </section>
        </Modal>
    </>
  )
}

export default Navbar