import React from 'react'
import BottomBar from './BottomBar'
import ChevronIcon from './svgs/ChevronIcon'
import GridDistortion from './ui/GridDistortion'
import ArrowIcon from './svgs/ArrowIcon'
import { FloatingCard } from './FloatingCard'
import { Link } from 'react-router-dom'
const WorkDesk = ({projects, handleCurrProject, currProject}) => {
  return (
    <section className='h-full grid grid-cols-12'>
    <article className='col-span-5 relative h-full'>
      <aside className='p-6'>
        <header className='ff-aalto text-white/90 text-4xl xl:text-5xl tracking-[1px] flex flex-col items-start uppercase'>
          <span>{projects[currProject]?.title}</span>
        </header>
        <p className='text-white/90 text-base xl:text-lg font-light mt-4'>
          {projects[currProject]?.smallDescription}
        </p>

      </aside>
      <article className='pb-0'>
        <h1 className='text-3xl xs:text-4xl tacking-[1px] ff-aalto relative pl-6 tracking-wide'> TOOLS USED</h1>
        <ul className='list-outside pt-2 font-light text-white/90 text-base xl:text-xl'>
           {/* <FloatingCard  projects={projects[currProject]?.tags}/> */}
           {projects[currProject]?.tags.map((tag, idx)=>(
              <li key={idx} className='h-12 mt-2 w-full bg-black hover:bg-primary text-primary hover:text-white duration-150 transition-all ff-aalto text-[32px] flex items-center px-8 tracking-wide'>
                {tag}
              </li>
           ))}
        </ul>
      </article>

      <article className='absolute w-full h-16 grid grid-cols-12 grid-border !border-x-0 !border-b-0 bottom-0 bg-black'>
          <button onClick={()=>handleCurrProject(currProject-1)} className='col-span-4 grid place-content-center grid-border !border-y-0 !border-l-0'>
            <ArrowIcon className=' w-6 fill-white rotate-180 ' />
          </button>

          <button onClick={()=>handleCurrProject(currProject+1)} className='col-span-4 grid place-content-center grid-border !border-y-0 text-4xl ff-aalto tracking-wide'>
            Know More
          </button>
          <button onClick={()=>handleCurrProject(currProject+1)} className='col-span-4 grid place-content-center grid-border !border-y-0 !border-r-0'>
          <ArrowIcon className='w-6 fill-white' />
        </button>
      </article>
    </article>


    <article className='col-span-7 flex flex-col items-start'>
      <aside className='h-full w-full grid-border !border-b-0 !border-t-0 !border-r-0 flex items-center justify-center relative'>
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