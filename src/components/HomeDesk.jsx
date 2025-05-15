import React from 'react'
import BottomBar from './BottomBar'
import ChevronIcon from './svgs/ChevronIcon'
import { Canvas } from '@react-three/fiber'
import HomeScene from './HomeScene'
import HomeLights from './ui/HomeLights'

const HomeDesk = () => {
  return (
    <section className='h-full w-full grid grid-cols-12 relative'>
      <article className='col-span-5'>
        <header className='ff-aalto text-white/90 text-5xl xl:text-6xl tracking-[1px] flex flex-col items-start grid-border !border-t-0 !border-x-0  p-6'>
          <span>architecting scalable,</span>
          <span>high-performance web / </span>
          <span>mobile applications with</span>
          <span><span className='stroke-text text-transparent tracking-[3px]'>precision</span> and <span className='stroke-text text-transparent tracking-[3px]'>innovation</span></span>
        </header>
        <article className='p-6'>
          <h1 className='text-4xl xs:text-5xl tacking-[1px] ff-aalto text-white/90  relative pl-4'><ChevronIcon className='absolute h-6 w-6 top-1/2 -translate-y-1/2 -left-3 ' /> Who we are</h1>
          <ul className='list-disc list-outside pl-2 pt-4 font-light text-white/90 text-base lg:text-sm 2xl:text-xl flex flex-col gap-2'>
            <li> 5+ years crafting dynamic websites, web apps & mobile apps.</li>
            <li> Experts in scalable, high-performance digital solutions.</li>
            <li> Focused on precision, clean code & future-ready architecture.</li>
            <li> Serving startups to enterprises with tailored experiences.</li>
            <li> Committed to performance optimization & SEO best practices.</li>
            <li> Committed to performance, SEO best practices & client-first development.</li>
          </ul>
        </article>
      </article>
      <article className='col-span-7 relative flex flex-col items-start'>
        <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 flex items-center justify-center'>
        
          <Canvas>
            <HomeLights />
            <HomeScene />
          </Canvas>
        </aside>
      </article>
      <BottomBar />

    </section>
  )
}

export default HomeDesk