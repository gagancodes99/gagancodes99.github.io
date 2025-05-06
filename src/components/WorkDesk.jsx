import React from 'react'
import BottomBar from './BottomBar'
import ChevronIcon from './svgs/ChevronIcon'
const WorkDesk = () => {
  return (
    <section className='h-full grid grid-cols-12'>
    <article className='col-span-5'>
      <aside className=' grid-border !border-t-0 !border-x-0 p-6'>
        <header className='ff-aalto text-white/90 text-5xl xl:text-6xl tracking-[1px] flex flex-col items-start uppercase'>
          <span>PROJECT NAME</span>
        </header>
        <p className='text-white/90 text-base lg:text-lg xl:text-xl font-light mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi aliquid quisquam magni eius omnis neque culpa repellendus architecto dolorem laborum amet nisi eveniet ab quos, expedita, similique dolore beatae!
        </p>

      </aside>
      <article className='p-6'>
        <h1 className='text-4xl xs:text-5xl tacking-[1px] ff-aalto relative pl-4'><ChevronIcon className='absolute h-6 w-6 top-1/2 -translate-y-1/2 -left-3' /> TOOLS USED</h1>
        <ul className='list-disc list-outside pl-2 pt-4 font-light text-white/90 text-base xl:text-xl'>
          
        </ul>
      </article>
    </article>
    <article className='col-span-7 flex flex-col items-start'>
      <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 flex items-center justify-center'>
        <img src="/hero.png" alt="" className='aspect-square w-[300px] h-[300px]'/>
      </aside>
    </article>
    <BottomBar />  

  </section>
  )
}

export default WorkDesk