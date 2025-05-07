import React, { useEffect, useRef } from 'react'
import ChevronIcon from './svgs/ChevronIcon'
import BottomBar from './BottomBar'
const HomeMob = () => {
  return (
    <section className="home-mob-container">
      <header className='ff-aalto text-white/90 text-4xl xs:text-[44px] leading-[44px] tracking-[1px] flex flex-row flex-wrap items-start grid-border !border-t-0 !border-x-0  p-6'>
        <span>architecting scalable,</span>
        <span>high-performance web /&nbsp;</span>
        <span>mobile applications with</span>
        <span><span className='stroke-text text-transparent tracking-[3px]'>precision</span> and <span className='stroke-text text-transparent tracking-[3px]'>innovation</span></span>
      </header>

      <figure className='p-6 grid-border !border-t-0 !border-x-0 grid place-content-center'>
        <img src="/hero.png" alt="" />
      </figure>

      <article className='p-6'>
        <h1 className='text-4xl xs:text-[44px] leading-[44px] tacking-[1px] ff-aalto relative pl-4 z-[0]'><ChevronIcon className='absolute h-6 w-6 top-1/2 -translate-y-1/2 -left-3' /> Who we are</h1>
        <ul className='list-disc list-outside pl-2 pt-4 font-light text-white/90 text-base'>
            <li> 5+ years crafting dynamic websites, web apps & mobile apps.</li>
            <li> Experts in scalable, high-performance digital solutions.</li>
            <li> Focused on precision, clean code & future-ready architecture.</li>
            <li> Serving startups to enterprises with tailored experiences.</li>
            <li> Committed to performance optimization & SEO best practices.</li>
            <li> Committed to performance, SEO best practices & client-first development.</li>
        </ul>
      </article>

      <BottomBar />
    </section>
  )
}

export default HomeMob