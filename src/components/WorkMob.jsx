import React from 'react'
import ChevronIcon from './svgs/ChevronIcon'
import BottomBar from './BottomBar'
const WorkMob = () => {
  return (
    <section className="home-mob-container pt-8 flex flex-col items-center justify-center gap-10">
      <aside className=' p-6 flex flex-col items-center justify-center gap-5'>
        <div className='w-full aspect-square max-w-80 bg-primary rounded-xl mx-auto'></div>
        <header className='ff-aalto text-white/90 text-4xl xs:text-[44px] leading-[44px] tracking-[1px] flex flex-row flex-wrap items-start uppercase'>
          <span>project name</span>
        </header>
        <p className='text-white/90 text-sm xs:text-base font-light text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi aliquid quisquam magni eius omnis neque culpa repellendus architecto dolorem laborum amet nisi eveniet ab quos, expedita, similique dolore beatae!
        </p>
      </aside>

        <div className='h-[0.25px] w-[90%] mx-auto bg-white/20'></div>

      <aside className=' p-6 flex flex-col items-center justify-center gap-5 '>
        <div className='w-full aspect-square max-w-80 bg-primary rounded-xl mx-auto'></div>
        <header className='ff-aalto text-white/90 text-4xl xs:text-[44px] leading-[44px] tracking-[1px] flex flex-row flex-wrap items-start uppercase'>
          <span>project name</span>
        </header>
        <p className='text-white/90 text-sm xs:text-base font-light text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi aliquid quisquam magni eius omnis neque culpa repellendus architecto dolorem laborum amet nisi eveniet ab quos, expedita, similique dolore beatae!
        </p>
      </aside>

    <BottomBar />
  </section>
  )
}

export default WorkMob