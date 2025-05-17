import React from 'react'
import BottomBar from './BottomBar'
import ChevronIcon from './svgs/ChevronIcon'
import GridDistortion from './ui/GridDistortion'
import ArrowIcon from './svgs/ArrowIcon'
const WorkDesk = ({projects, handleCurrProject, currProject}) => {
  return (
    <section className='h-full grid grid-cols-12'>
    <article className='col-span-5'>
      <aside className=' grid-border !border-t-0 !border-x-0 p-6'>
        <header className='ff-aalto text-white/90 text-5xl xl:text-6xl tracking-[1px] flex flex-col items-start uppercase'>
          <span>{projects[currProject]?.title}</span>
        </header>
        <p className='text-white/90 text-base lg:text-lg xl:text-xl font-light mt-4'>
          {projects[currProject]?.smallDescription}
        </p>

      </aside>
      <article className='p-6'>
        <h1 className='text-4xl xs:text-5xl tacking-[1px] ff-aalto relative pl-4'><ChevronIcon className='absolute h-6 w-6 top-1/2 -translate-y-1/2 -left-3' /> TOOLS USED</h1>
        <ul className='list-disc list-outside pl-2 pt-4 font-light text-white/90 text-base xl:text-xl'>
           
        </ul>
      </article>
    </article>
    <article className='col-span-7 flex flex-col items-start'>
      <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 flex items-center justify-center relative'>
        <button onClick={()=>handleCurrProject(currProject-1)} className='absolute backdrop-blur-md h-20 w-20 top-1/2 -translate-y-1/2 z-30 left-10 grid place-content-center'>
          <ArrowIcon className='h-12 w-12 fill-black rotate-180' />
        </button>
        <button onClick={()=>handleCurrProject(currProject+1)} className='absolute backdrop-blur-md h-20 w-20 top-1/2 -translate-y-1/2 z-30 right-10 grid place-content-center'>
          <ArrowIcon className='h-12 w-12 fill-black ' />
        </button>
        <GridDistortion
          imageSrc={projects[currProject]?.imageUrl}
          grid={10}
          mouse={0.25}
          strength={0.15}
          relaxation={0.9}
          className="custom-class z-0"
        />
      </aside>
    </article>
    <BottomBar />  

  </section>
  )
}

export default WorkDesk